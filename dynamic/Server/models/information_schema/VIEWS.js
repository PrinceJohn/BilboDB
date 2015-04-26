/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VIEWS', { 
    TABLE_CATALOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    TABLE_SCHEMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    TABLE_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    VIEW_DEFINITION: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    CHECK_OPTION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    IS_UPDATABLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    DEFINER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    SECURITY_TYPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CHARACTER_SET_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    COLLATION_CONNECTION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  });
};
