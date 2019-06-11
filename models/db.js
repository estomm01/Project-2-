const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  dialect: env.DATABASE_DIALECT,
  define: {
    underscored: true
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.userInfo = require('../models/userInfo.js')(sequelize, Sequelize);
db.pet = require('../models/pet.js')(sequelize, Sequelize);
db.match = require('../models/match.js')(sequelize, Sequelize);

//need to set up relations
db..belongsTo(db.);
db..hasMany(db.);
db..belongsTo(db.);
db..hasMany(db.);

module.exports = db;
