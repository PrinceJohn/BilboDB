/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appuser', { 
    id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token_created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  });
};
