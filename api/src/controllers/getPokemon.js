const { Pokemon, Type } = require('../config/db');
const axios = require('axios');
const mapPokemonObject = require('../utils/mapPokemon');

const API_POKEMON = "https://pokeapi.co/api/v2/pokemon";

//DB by name
const getPokemon = async (name) => {
    try {
        if(name) {
            const singlePokemon = await Pokemon.findOne({
                where: { name },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
                include: {
                    model: Type,
                    as: 'types',
                    attributes: ['name'],
                    through: {
                        attributes: [] //tabla intermedia, nada
                    },
                }
            });

            if(singlePokemon) { //existe en DB
                return singlePokemon;
            } else {
                //***********Search API */
                try {
                    const pokemonAPI = await axios(`${API_POKEMON}/${name}`);

                    if(pokemonAPI.stauts === 404) throw Error('Pokemon was not found.');

                    const data = pokemonAPI.data;

                    if(!data.name) throw Error('Pokemon does not exists. Try other.');

                    return mapPokemonObject(data); //execute mapping fn
                } catch (error) {
                    return {error: error.message};
                }
            }
        } else { //no se envio query =?name
            try {
                const allPokemon = await Pokemon.findAll();
                return allPokemon;
            } catch (error) {
                return { error: error.message };
            }
        }
    } catch (error) {
        
    }
};

module.exports = {
    getPokemon,
}