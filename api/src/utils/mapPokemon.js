const mapPokemonObject = (data) => {
  const mappedData = {
    id: data.id,
    name: data.name,
    hp: data.stats[0]?.base_stat || 0, // Assuming hp, attack, defense, speed are in the same order
    attack: data.stats[1]?.base_stat || 0,
    defense: data.stats[2]?.base_stat || 0,
    speed: data.stats[5]?.base_stat || 0,
    height: data.height,
    weight: data.weight,
    types: data.types.map((typArr) => ({ name: typArr.type.name })),
    image: data.sprites.other.dream_world.front_default,
  };

  return mappedData;
};

module.exports = mapPokemonObject;
