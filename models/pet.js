module.exports = function(sequelize, DataTypes) {
  var Pet = sequelize.define("pethappy", {
    burgername: DataTypes.STRING,
    devoured: DataTypes.TEXT
  });
  return Pet;
};
