const mapPokemonObject = require("./mapPokemon");
const API_POKEMON_URL = `https://pokeapi.co/api/v2/pokemon`;

const getApiPokemonLot = async (POKEMON_OFFSET, POKEMON_LIMIT) => {
  try {
    const response = await fetch(
      `${API_POKEMON_URL}?offset=${POKEMON_OFFSET}&limit=${POKEMON_LIMIT}`
    );
    const allPokemon = await response.json();

    const pokemonDetailPromises = allPokemon.results.map((pokemon) =>
      fetchPokemonDetail(pokemon)
    );
    const arrayOfIterablePokemon = await Promise.all(pokemonDetailPromises);
    return arrayOfIterablePokemon;
  } catch (error) {
    return { error };
  }
};

const fetchPokemonDetail = async (singlePokemon) => {
  try {
    //del obj obtenido del fetch anterior
    //singlePokemon = { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }
    const response = await fetch(singlePokemon.url);
    const data = await response.json();

    const pokemonReformated = mapPokemonObject(data);
    return pokemonReformated;
  } catch (error) {
    return { error };
  }
};

module.exports = { getApiPokemonLot };
