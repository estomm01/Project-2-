// module.exports = function(sequelize, DataTypes) {
//   var Pet = sequelize.define("Pet", {
//     id: {
//       type: DataTypes.UUID,
//       primaryKey: true,
//       defaultValue: DataTypes.UUID,
//       allowNull: false
//     },
//     pet_name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     pet_shelter: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     liked: {
//       type: DataTypes.BOOLEAN
//     },
//     pet_photo: {
//       type: DataTypes.STRING
//     },
//     value: {
//       paranoid: true,
//       underscored: true
//     }
//   });
//   return Pet;
// };

// // return Pet;
