const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  sequelize.define("Locations", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(1000),
    },
    type: {
      type: DataTypes.STRING(1000),
    },
    dimension: {
      type: DataTypes.STRING(1000),
    },
  });
};
