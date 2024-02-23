const { Router } = require('express');
// const { pokemonHandler } = require('../handlers/pokemonHandler');
// const { postNewPokemonHandler, getPokemonByNameHandler, getPokemonByIdHandler } = require('../handlers/pokemonHandler');
const pokemonRouter = require('./pokemonRouter');
const typesRouter = require('./typesRouter');

const router = Router();

// Configurar los routers
router.use('/pokemons',  pokemonRouter);
router.use('/types', typesRouter);

module.exports = router;
