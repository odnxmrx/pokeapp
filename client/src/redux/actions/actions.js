import { GET_ALL_POKEMONS, GET_POKEMON_DETAIL } from "./action-types";
import axios from "axios";

const URL_BASE = "http://localhost:3001/pokemonapi/pokemons";

export const getAllPokemons = () => {
  return async (dispatch) => {
    try {
      const response = await axios(`${URL_BASE}`);
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
    axios(`${URL_BASE}/${id}`)
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
