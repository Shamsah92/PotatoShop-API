const { DataTypes, Model } = require("require");
const { DataTypes } = require("sequelize/types");

const db = require("../db");

class Jetski extends Model {}

Jetski.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
  }
);

module.exports = Jetski;
