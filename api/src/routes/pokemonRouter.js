const { Router } = require("express");
// const { pokemonHandler } = require('../handlers/pokemonHandler');
const {
  postNewPokemonHandler,
  getPokemonByNameHandler,
  getPokemonByIdHandler,
} = require("../handlers/pokemonHandler");

const pokemonRouter = Router();

// Configurar los routers
pokemonRouter.post("/", postNewPokemonHandler);
pokemonRouter.get("/", getPokemonByNameHandler);
pokemonRouter.get("/:id", getPokemonByIdHandler);

module.exports = pokemonRouter;
