/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KEY_COLUMN_USAGE', { 
    CONSTRAINT_CATALOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CONSTRAINT_SCHEMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CONSTRAINT_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
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
    COLUMN_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ORDINAL_POSITION: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    POSITION_IN_UNIQUE_CONSTRAINT: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    REFERENCED_TABLE_SCHEMA: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    REFERENCED_TABLE_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    REFERENCED_COLUMN_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
