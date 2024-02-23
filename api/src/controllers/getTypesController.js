const { Type } = require("../config/db");

const getAllTypes = async () => {
  try {
    const allTypes = await Type.findAll({
      attributes: ["id", "name"],
      order: [
        ["id", "ASC"]
      ]
    });

    return allTypes;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {
  getAllTypes,
}