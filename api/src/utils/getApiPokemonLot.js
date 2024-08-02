const mapPokemonObject = require("./mapPokemon");
// let POKEMON_OFFSET = 0
// let POKEMON_LIMIT = 50;
const API_POKEMON = `https://pokeapi.co/api/v2/pokemon`;

const getApiPokemonLot = async (POKEMON_LIMIT1, POKEMON_OFFSET1) => {
  console.log('EL PARAM limit:', POKEMON_LIMIT1);
  console.log('param offset1: ', POKEMON_OFFSET1);
  
  
  let arrayOfIterablePokemon = [];
  try {
    const response = await fetch(`${API_POKEMON}?offset=${POKEMON_OFFSET1}&limit=${POKEMON_LIMIT1}`);
    const allPokemon = await response.json();

    for (const pokemon of allPokemon.results) {
      const pokemonDetailResponse = await fetchPokemonDetail(pokemon); //llamada a fn asincrona
      arrayOfIterablePokemon.push(pokemonDetailResponse);
    }
  } catch (error) {
    return { error };
  } finally { //either way
    // const response = await fetch(`${API_POKEMON}?offset=${POKEMON_OFFSET + 50}&limit=${POKEMON_LIMIT + 50}`);
    // const allPokemon = await response.json();

    // for (const pokemon of allPokemon.results) {
    //   const pokemonDetailResponse = await fetchPokemonDetail(pokemon); //llamada a fn asincrona
    //   arrayOfIterablePokemon.push(pokemonDetailResponse);
    // }
  }
  return arrayOfIterablePokemon;
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
