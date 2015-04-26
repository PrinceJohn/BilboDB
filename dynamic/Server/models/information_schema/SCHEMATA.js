/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SCHEMATA', { 
    CATALOG_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    SCHEMA_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    DEFAULT_CHARACTER_SET_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    DEFAULT_COLLATION_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    SQL_PATH: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
