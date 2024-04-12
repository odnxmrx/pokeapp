const axios = require("axios");
const mapPokemonObject = require("./mapPokemon");
let POKEMON_LIMIT = 150;
const API_POKEMON = `https://pokeapi.co/api/v2/pokemon`;

// const getApiPokemonLot = async () => {
//   try {
//     let remotePokemons = [];
//     let i = 1;
//     while (i <= POKEMON_LIMIT) {
//       const response = await axios(`${API_POKEMON}/${i}`);

//       const data = response.data;

//       remotePokemons.push(mapPokemonObject(data));
//       i++;
//     }

//     return remotePokemons;
//   } catch (error) {
//     return { error: error.message };
//   }
// };

const getApiPokemonLot = () => {
  try {
    let arrayOfIterablePokemon = [];
    fetch(`${API_POKEMON}?limit=${POKEMON_LIMIT}`)
      .then((response) => response.json())
      .then(function (allPokemon) {
        // console.log('array de TODOS allPokemon: ', allPokemon); // array of all pokemon
        allPokemon.results.forEach(function (pokemon) {
          fetchPokemonDetail(pokemon);
        });
      });

    function fetchPokemonDetail(singlePokemon) {
      // singlePokemon = { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }
      let urlPokemon = singlePokemon?.url;

      fetch(urlPokemon)
        .then((response) => response.json())
        .then((data) => {
          // console.log('que es data?? ', data);
          arrayOfIterablePokemon.push(mapPokemonObject(data));
        });
    }

    return arrayOfIterablePokemon;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = getApiPokemonLot;
