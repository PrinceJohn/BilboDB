/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ROUTINES', { 
    SPECIFIC_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ROUTINE_CATALOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ROUTINE_SCHEMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ROUTINE_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ROUTINE_TYPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    DATA_TYPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CHARACTER_MAXIMUM_LENGTH: {
      type: DataTypes.INTEGER(21),
      allowNull: true,
    },
    CHARACTER_OCTET_LENGTH: {
      type: DataTypes.INTEGER(21),
      allowNull: true,
    },
    NUMERIC_PRECISION: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    NUMERIC_SCALE: {
      type: DataTypes.INTEGER(21),
      allowNull: true,
    },
    DATETIME_PRECISION: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    CHARACTER_SET_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    COLLATION_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DTD_IDENTIFIER: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ROUTINE_BODY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ROUTINE_DEFINITION: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    EXTERNAL_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    EXTERNAL_LANGUAGE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PARAMETER_STYLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    IS_DETERMINISTIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    SQL_DATA_ACCESS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    SQL_PATH: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    SECURITY_TYPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CREATED: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    LAST_ALTERED: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    SQL_MODE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ROUTINE_COMMENT: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    DEFINER: {
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
    },
    DATABASE_COLLATION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  });
};
