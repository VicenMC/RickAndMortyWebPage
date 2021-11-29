//Initializing and calling sequelize
const { DataTypes } = require("sequelize");

//select * from "Countries" where "ID" = 'AFG';

module.exports = (sequelize) => {
  sequelize.define("Character", {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    species: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    origin: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    }
  });
};
