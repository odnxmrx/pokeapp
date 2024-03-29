import {
  GET_ALL_POKEMONS,
  GET_POKEMON_DETAIL,
  CLEAN_POKEMON_DETAIL,
  GET_ALL_TYPES,
  FILTER_BY_SOURCE,
  FILTER_BY_POKEMON_TYPE,
  ORDER_BY_POKEMON_NAME,
  ORDER_BY_POKEMON_ATTACK,
  SET_FILTER_OPTIONS,
} from "./actions/action-types";

const initialState = {
  allPokemons: [],
  pokemonDetail: {},
  allTypes: [],
  allPokemonsAux: [],
  filterOptions: {
    source: "All",
    type: "All",
    orderByName: "A",
    orderByAttack: "Menor",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
        allPokemonsAux: action.payload,
      };
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    case CLEAN_POKEMON_DETAIL:
      return {
        ...state,
        pokemonDetail: {},
      };
    case GET_ALL_TYPES:
      // console.log('estoy lllegando?? ', action.payload);
      return {
        ...state,
        allTypes: action.payload,
      };

    case FILTER_BY_SOURCE:
      const pokemonBySource = [...state.allPokemons].filter((pokemon) => {
        if (action.payload === "DB") {
          return pokemon?.id?.length > 8; //porque es un string UUID
        } else if (action.payload === "API") {
          return pokemon?.id < 1200; //porque es un Number
        } 
        else if (action.payload === "All") { // realmente necesito esto?
          return pokemon?.id !== null;
        }
      });
      // console.log('que es pokemonbysource? ', pokemonBySource);
      return {
        ...state,
        allPokemons:
          action.payload === "All" ? state.allPokemonsAux : pokemonBySource,
      };

    case FILTER_BY_POKEMON_TYPE:
      let pokemonByType = [...state.allPokemons].filter((pokemon) => {
        return pokemon.types.some((type) => type.name === action.payload);
      });
      // console.log('pokemonbyType??, ', pokemonByType);
      return {
        ...state,
        allPokemons:
          action.payload === "All" ? state.allPokemonsAux : pokemonByType,
      };

    case ORDER_BY_POKEMON_NAME:
      let sortPokemonByName = [...state.allPokemons].sort(
        (firstEl, secondEl) => {
          if (action.payload === "A") {
            return firstEl.name.localeCompare(secondEl.name); //ordenando caracteres no ASCII
          } else if (action.payload === "D") {
            return secondEl.name.localeCompare(firstEl.name);
          }
        }
      );

      return {
        ...state,
        allPokemons: sortPokemonByName,
      };
    case ORDER_BY_POKEMON_ATTACK:
      let sortPokemonByAttack = [...state.allPokemons].sort(
        (firstEl, secondEl) => {
          if (action.payload === "Menor") {
            return firstEl.attack - secondEl.attack;
          } else if (action.payload === "Mayor") {
            return secondEl.attack - firstEl.attack;
          }
        }
      );

      return {
        ...state,
        allPokemons: sortPokemonByAttack,
      };

    case SET_FILTER_OPTIONS:
      // console.log('action.payload en el filterOptions?? ',action.payload);
      return {
        ...state,
        filterOptions: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
