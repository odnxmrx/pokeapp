const axios = require("axios");
const mapPokemonObject = require("./mapPokemon");
let POKEMON_LIMIT = 5;
const API_POKEMON = `https://pokeapi.co/api/v2/pokemon`;

/******************************* */
// const getApiPokemonLot = () => {
//   let arrayOfIterablePokemon = [];

//   fetch(`${API_POKEMON}?limit=${POKEMON_LIMIT}`)
//     .then((response) => response.json())
//     .then(function (allPokemon) {
//       // console.log('array de TODOS allPokemon: ', allPokemon); // array of all pokemon
//       allPokemon.results.forEach(function (pokemon) {
//         arrayOfIterablePokemon.push(fetchPokemonDetail(pokemon));
//         // console.log(aver);
//       });
//     })
//     .catch((error) => console.log("lot arr err: ", error));

//   function fetchPokemonDetail(singlePokemon) {
//     // singlePokemon = { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }
//     let urlPokemon = singlePokemon?.url;

//     fetch(urlPokemon)
//       .then((response) => response.json())
//       .then((data) => {
//         // console.log('que es data?? ', data);
//         mapPokemonObject(data);
//         // console.log("pokemonReformated?? Debe ser obj: ", pokemonReformated);
//         // arrayOfIterablePokemon.push(pokemonReformated);
//         // console.log('que va siendo el arr arrayOfIterablePokemon:?? ', arrayOfIterablePokemon);
//       })
//       .catch((error) => console.log("single obj error: ", error));
//   }
//   console.log("el arreglo arrayOfIterablePokemon final???", arrayOfIterablePokemon);
//   return arrayOfIterablePokemon;
// };

const getApiPokemonLot = async () => {
  let arrayOfIterablePokemon = [];

  try {
    const response = await fetch(`${API_POKEMON}?limit=${POKEMON_LIMIT}`);
    const allPokemon = await response.json();

    for (const pokemon of allPokemon.results) {
      const pokemonDetailResponse = await fetchPokemonDetail(pokemon); //llamada a fn asincrona
      arrayOfIterablePokemon.push(pokemonDetailResponse);
    }
  } catch (error) {
    return { error };
  }
  // console.log("Final array of Pokemon: ", arrayOfIterablePokemon);
  return arrayOfIterablePokemon;
};

const fetchPokemonDetail = async (singlePokemon) => {
  try {
    const response = await fetch(singlePokemon.url);
    const data = await response.json();
    const pokemonReformated = mapPokemonObject(data);
    return pokemonReformated;
  } catch (error) {
    console.log("Error fetching Pokemon detail: ", error);
    return { error };
  }
};

module.exports = { getApiPokemonLot };
