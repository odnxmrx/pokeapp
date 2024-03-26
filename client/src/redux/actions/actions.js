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
} from "./action-types";
import axios from "axios";

// const URL_BASE = "https://pokeapp-w0td.onrender.com/pokemonapi";
const URL_BASE = 'http://localhost:3001/pokemonapi';

export const getAllPokemons = () => {
  return async (dispatch) => {
    try {
      const response = await axios(`${URL_BASE}/pokemons`);
      const data = response.data;

      return dispatch({
        type: GET_ALL_POKEMONS,
        payload: data,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const getPokemonDetail = (id) => {
  return function (dispatch) {
    axios(`${URL_BASE}/pokemons/${id}`)
      .then(({ data }) => {
        return dispatch({
          type: GET_POKEMON_DETAIL,
          payload: data,
        });
      })
      .catch((error) => {
        return { error: error.message };
      });
  };
};

export const cleanDetail = () => {
  return {
    type: CLEAN_POKEMON_DETAIL,
  };
};

export const getAllTypes = () => {
  return function (dispatch) {
    axios
      .get(`${URL_BASE}/types`)
      .then(({ data }) => {
        return dispatch({
          type: GET_ALL_TYPES,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error.message); //DE MOMENTO. Debo cambiarlo.
      });
  };
};


export const filterBySource = (pokemonsource) => {
  return {
    type: FILTER_BY_SOURCE,
    payload: pokemonsource,
  }
}

export const filterByPokemonType = (type) => {
  return {
    type: FILTER_BY_POKEMON_TYPE,
    payload: type,
  };
};

export const orderByPokemonName = (namesort) => {
  return {
    type: ORDER_BY_POKEMON_NAME,
    payload: namesort,
  };
};

export const orderByPokemonAttack = (attack) => {
  return {
    type: ORDER_BY_POKEMON_ATTACK,
    payload: attack,
  };
};

export const setFilterOptions = (options) => {
  return {
    type: SET_FILTER_OPTIONS,
    payload: options,
  };
};
