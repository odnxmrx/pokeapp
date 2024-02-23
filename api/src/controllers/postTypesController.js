const { Type } = require("../config/db");
const axios = require("axios");

const API_POKEMON_TYPE = "https://pokeapi.co/api/v2/type/";

const postTypesController = async () => {
  try {
    const response = await axios(API_POKEMON_TYPE);

    const data = response.data.results;
    // console.log('que es data.results??', data);
    const realData = mapType(data);
    // console.log("la realData??? ", realData);

    return await Type.bulkCreate(realData, {
      validate: true
    });

  } catch (error) {
    return error.message;
  }
};

//Id de los Types inicia en "1"
function mapType(arrayOfTypes) {
  let rearrengedTypes = [];

  arrayOfTypes.map((item) => {
    let splitUrl = item.url.split("/");
    let realId = splitUrl[splitUrl.length - 2];
    // console.log('ques realId??? ',realId);
    rearrengedTypes.push({
      id: realId,
      name: item.name,
    });
  });
  return rearrengedTypes;
  // console.log('relleno algo rearrengedTypes??', rearrengedTypes);
}

module.exports = {
  postTypesController,
};
