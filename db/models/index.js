const Jetski = require("./Jetski");

const Factory = require("./Factory");

Factory.hasMany(Jetski, {
  as: "jetskis",
  foreignKey: "factoryId",
  allowNull: false,
});

Jetski.belongsTo(Factory, { as: "factory", allowNull: false });

module.exports = { Jetski, Factory };
