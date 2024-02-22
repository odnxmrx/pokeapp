const { Pokemon, Type } = require("../config/db");

const createPokemonDB = async (
  types,
  name,
  image,
  hp,
  attack,
  defense,
  speed,
  height,
  weight
) => {
  try {
    if (types.length === 0) throw Error("Pokemon Type must be added.");

    //Find/validate existance of Types added with Types table
    const typeInstances = await Type.findAll({
      where: {
        name: types,
      },
    });

    if (typeInstances.length !== types.length)
      throw Error("Pokemon type(s) can be only existing ones.");

    const newPokemon = await Pokemon.create({
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
    });

    //RELATION between pokemon with type tables
    if (typeInstances.length > 0) {
      //Relation Pokemon
      await newPokemon.addType(typeInstances);
      return {
        message: `New Pokémon ${newPokemon.name} successfully created!`,
        newPokemon
      };
    } else {
      throw Error("Pokemon type must be added.");
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createPokemonDB,
};
