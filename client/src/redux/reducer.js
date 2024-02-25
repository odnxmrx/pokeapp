import {
  GET_ALL_POKEMONS,
  GET_POKEMON_DETAIL,
  CLEAN_POKEMON_DETAIL,
  GET_ALL_TYPES,
  FILTER_BY_POKEMON_TYPE,
  ORDER_BY_POKEMON_NAME,
  ORDER_BY_POKEMON_ATTACK,
  SET_FILTER_OPTIONS,
} from "./actions/action-types";

const initialState = {
  allPokemons: [],
  pokemonDetail: {},
  allTypes: [],
  allPokemonAux: [],
  filterOptions: {
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
        allPokemonAux: action.payload,
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
      return {
        ...state,
        allTypes: action.payload,
      };
    case FILTER_BY_POKEMON_TYPE:
      const pokemonByType = [...state.allPokemons].filter((pokemon) => {
        return pokemon.types.some((type) => type.name === action.payload);
      });

      return {
        ...state,
        allPokemons:
          action.payload === "All" ? state.allPokemonAux : pokemonByType,
      };
    case ORDER_BY_POKEMON_NAME:
      const sortPokemonByName = [...state.allPokemons];

      sortPokemonByName.sort((firstEl, secondEl) => {
        if (action.payload === "A") {
          return firstEl.name.localeCompare(secondEl.name); //ordenando caracteres no ASCII
        } else if (action.payload === "D") {
          return secondEl.name.localeCompare(firstEl.name);
        }
      });

      return {
        ...state,
        allPokemons: sortPokemonByName,
      };
    case ORDER_BY_POKEMON_ATTACK:
      const sortPokemonByAttack = [...state.allPokemons].sort(
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
