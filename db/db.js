const { Sequelize } = require("sequelize");

const db = new Sequelize({
  username: "postgres",
  password: "0",
  database: "jetski_db",
  dialect: "postgres",
  host: "localhost",
});

module.exports = db;
