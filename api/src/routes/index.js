const { Router } = require('express');
const { pokemonHandler } = require('../handlers/pokemonHandler');
const { postNewPokemonHandler, getPokemonByNameHandler, getPokemonByIdHandler } = require('../handlers/pokemonHandler');


const router = Router();

// Configurar los routers
router.post('/pokemons',  postNewPokemonHandler);
router.get('/pokemons', getPokemonByNameHandler);
router.get('/pokemons/:id', getPokemonByIdHandler);


module.exports = router;
