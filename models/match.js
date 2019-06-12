module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    petShelter: DataTypes.INTEGER
  });
  return Example;
};

// module.exports = function (sequelize, DataTypes) {
//   var Match = sequelize.define("Example", {
//     pet_match: {
//       text: DataTypes.STRING,
//       allowNull: false

//     },
//     pet_rating: {
//       text: DataTypes.STRING,
//       description: DataTypes.TEXT
//     }
//   });
//   return Match;
// };
