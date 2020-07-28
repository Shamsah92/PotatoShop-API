const { DataTypes, Model } = require("sequelize");

const SequelizeSlugify = require("sequelize-slugify");

const db = require("../db");

class Jetski extends Model {}

Jetski.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      defaultValue: 1000,
      validate: {
        min: 500,
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
  }
);
SequelizeSlugify.slugifyModel(Jetski, {
  source: ["name"],
});

module.exports = Jetski;
