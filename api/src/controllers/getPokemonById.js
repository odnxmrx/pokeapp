const { Pokemon, Type } = require("../config/db");
const axios = require("axios");
const getApiSinglePokemon = require('../utils/getApiSinglePokemon');

const API_POKEMON = "https://pokeapi.co/api/v2/pokemon";

const getPokemonbyIdController = async (id) => {
  // console.log("recibi como ID length: ", id.length);
  try {
    if (id.length > 8) { //************buscar en BD
      const myPokemon = await Pokemon.findByPk(id, {
        include: [
          {
            model: Type,
            as: "types",
            attributes: ["name"],
            // exclude: ["createdAt", "updatedAt"],
            through: {
              //tabla intermedia, nada
              attributes: [],
            },
          },
        ],
      });

      // console.log('que hay aqi?', myPokemon);

      // if(!myPokemon) return {message: 'Pokemon does not exists.'};

      return myPokemon;
    } else { //***********buscar en API
      return getApiSinglePokemon(id);
    }
  } catch (error) {
    return { error: error.messsage };
  }
};

module.exports = {
  getPokemonbyIdController,
};
