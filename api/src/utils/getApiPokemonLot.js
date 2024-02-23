const axios = require("axios");
const mapPokemonObject = require("./mapPokemon");
let POKEMON_LIMIT = 3;
const API_POKEMON = `https://pokeapi.co/api/v2/pokemon`;

const getApiPokemonLot = async () => {
  try {
    let remotePokemons = [];
    let i = 1;
    while (i <= POKEMON_LIMIT) {
      const response = await axios(`${API_POKEMON}/${i}`);

      const data = response.data;

      remotePokemons.push(mapPokemonObject(data));
      i++;
    }

    return remotePokemons;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = getApiPokemonLot;
