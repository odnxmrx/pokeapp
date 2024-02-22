const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define("Pokemon", {
    // defino el modelo
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: [/^[a-z\-]*$/], //only minusc letters or '-' symbol
        notIn: [["abc", "henry", "soyhenry", "foo", "bar"]],
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        myValidator(value) {
          if (value < 0 || value > 255)
            throw Error("HP value exceeds constraints.");
        },
      },
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [0, 180],
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [0, 230],
    },
    speed: {
      type: DataTypes.INTEGER,
      len: [0, 180],
    },
    height: {
      type: DataTypes.INTEGER,
      len: [0, 20],
    },
    weight: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 400,
      },
    },
  });
};
