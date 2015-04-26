/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ENGINES', { 
    ENGINE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    SUPPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    COMMENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    TRANSACTIONS: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    XA: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    SAVEPOINTS: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
