const mapPokemonObject = (data) => {
  const mappedData = {
    id: data.id,
    name: data.name,
    hp: data.stats[0]?.base_stat || 0, // stats[0] -> hp
    // 3 - special attack, 4 - special deffense
    attack: data.stats[1]?.base_stat || 0, // stats[1] -> attack
    defense: data.stats[2]?.base_stat || 0, // stats[2] -> deffense
    speed: data.stats[5]?.base_stat || 0, // stats[5] -> speed
    height: data.height,
    weight: data.weight,
    types: data.types.map((typArr) => ({ name: typArr.type.name })),
    image: data.sprites.other.dream_world.front_default, // svg pic
  };

  return mappedData;
};

module.exports = mapPokemonObject;
