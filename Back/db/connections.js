//Connections and relations between tables
const {Sequelize} = require('sequelize');
require('dotenv').config();

//Defining database info
const {DB_PASSWORD,
DB_PORT,
DB_USERNAME,
DB_NAME} = process.env


//Sequelize config to deploy the page
let sequelize = process.env.NODE_ENV === 'production'
? new Sequelize({
  database: DB_NAME,
  dialect:"postgres",
  host: DB_PORT,
  port: 5432,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  pool:{
    max: 3,
    min: 1,
    idle: 10000,
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
    keepAlive: true,
  },
  ssl: true,
})
: new Sequelize(
  `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_PORT}/${DB_NAME}`,
  {logging: false, native: false})


//Requiring database models
const ModelCharacter = require ('./tables/newCharacter.js');
const ModelEpisode = require ('./tables/episode.js');
const ModelLocation = require ('./tables/locations.js');

//Initializing models
ModelCharacter(sequelize);
ModelEpisode(sequelize);
ModelLocation(sequelize);
const {Character, Episode, Location} = sequelize.models;

//Relations

Character.belongsToMany(Episode, {through: 'CharacterEpisode'})
Episode.belongsToMany(Character, {through: 'CharacterEpisode'})



/*
ModelCharacter.associate = (models) => {
  ModelCharacter.belongsToMany(models.Locations, {
    foreignKey: 'locationID'
  })
}*/

module.exports = {
	...sequelize.models,
	db: sequelize,
}