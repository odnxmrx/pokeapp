const axios = require("axios");
const mapPokemonObject = require("./mapPokemon");

const API_POKEMON = "https://pokeapi.co/api/v2/pokemon";

const getApiSinglePokemon = async (pokemonid) => {
  try {
    const pokemonAPI = await axios(`${API_POKEMON}/${pokemonid}`);

    if (pokemonAPI.stauts === 404) throw Error("Pokemon was not found.");

    const data = pokemonAPI.data;

    if (!data.name) throw Error("Pokemon does not exists. Try other.");

    return mapPokemonObject(data); //execute mapping fn
    
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = getApiSinglePokemon;
