const { Sequelize } = require("sequelize");

const db = new Sequelize({
  username: "postgres",
  password: "Hussainovic92",
  database: "jetski_db",
  dialect: "postgres",
  host: "localhost",
  logging: false,
});

module.exports = db;
