// const { Router } = require('express');
const { createPokemonDB } = require('../controllers/postPokemon');
const { getPokemon } = require('../controllers/getPokemon');
const { getPokemonbyIdController } = require('../controllers/getPokemonById');

// const pokemonHandler = Router();

//POST by body
const postNewPokemonHandler = async(req, res) => {
    const {types, name, image, hp, attack, defense, speed, height, weight } = req.body;

    try {
        if(![name, image, hp, attack, defense, types].every(Boolean)) throw Error('Missing required data.')

        pokemonName = name.toLowerCase(); //required for BD

        const response = await createPokemonDB(types, pokemonName, image, hp, attack, defense, speed, height, weight);

        res.status(200).json(response);

    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

//GET by query - ?name=
const getPokemonByNameHandler = async (req, res) => {
    const { name } = req.query;
    let pokemonName;

    try {
        if(name) {
            pokemonName = name.toLowerCase(); // needed like this
        }

        const singlePokemon = await getPokemon(pokemonName);

        res.status(200).json(singlePokemon);

    } catch (error) {
        res.status(400).json({error: error.message})
    }

};

//GET by id - /:id
const getPokemonByIdHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const poki = await getPokemonbyIdController(id);
        res.status(200).json(poki);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    postNewPokemonHandler,
    getPokemonByNameHandler,
    getPokemonByIdHandler,
}