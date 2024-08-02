const { Pokemon, Type } = require("../config/db");
const { getApiPokemonLot } = require("../utils/getApiPokemonLot");
const getApiSinglePokemon = require("../utils/getApiSinglePokemon");

//DB by name
const getPokemon = async (name) => {
  try {
    if (name) {
      const singlePokemon = await Pokemon.findOne({
        where: { name },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: {
          model: Type,
          as: "types",
          attributes: ["name"],
          through: {
            attributes: [], //tabla intermedia, nada
          },
        },
      });

      if (singlePokemon) {
        //existe en DB
        return singlePokemon;
      } else {
        //***********Search API */
        return getApiSinglePokemon(name);
      }
    } else {
      //no se envio query =?name
      try {
        let POKEMON_OFFSET = 0;
        let POKEMON_LIMIT = 50;
        const allDatabasePokemon = await Pokemon.findAll({
          include: {
            model: Type,
            as: "types",
            attributes: ["name"],
            through: {
              //tabla intermedia, nada
              attributes: [],
            },
          },
          order: [["createdAt", "ASC"]],
        });

        const allApiPokemon50 = await getApiPokemonLot(POKEMON_OFFSET, POKEMON_LIMIT); //llamando la función asincronica
        const allApiPokemon150 = await getApiPokemonLot(POKEMON_OFFSET + 50, POKEMON_LIMIT + 50); //SPLIT into 2nd lot

        return [...allDatabasePokemon, ...allApiPokemon50, ...allApiPokemon150];
      } catch (error) {
        return { error: error.message };
      }
    }
  } catch (error) {}
};

module.exports = {
  getPokemon,
};
