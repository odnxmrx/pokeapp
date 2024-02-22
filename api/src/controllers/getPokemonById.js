const { Pokemon, Type } = require("../config/db");
// const axios = require("axios");

const getPokemonbyIdController = async (id) => {
  try {
    const myPokemon = await Pokemon.findByPk(id, {
      include: [{
        model: Type,
        as: 'types',
        attributes: ["name"],
        // exclude: ["createdAt", "updatedAt"],
        through: { //tabla intermedia, nada
          attributes: [],
        }
      }]
    });

    // console.log('que hay aqi?', myPokemon);

    if(!myPokemon) return {error: 'Pokemon does not exists.'};

    return myPokemon;
  } catch (error) {
    return { error: error.messsage };
  }
};

module.exports = {
  getPokemonbyIdController,
}