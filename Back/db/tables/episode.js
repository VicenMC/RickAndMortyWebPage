const { DataTypes } = require("sequelize");

//select * from "Countries" where "ID" = 'AFG';

module.exports = (sequelize) => {
  sequelize.define("Episode", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(500),
    },
    air_date: {
      type: DataTypes.STRING(500),
    },
    episode: {
      type: DataTypes.STRING(500),
    }
  });
};
