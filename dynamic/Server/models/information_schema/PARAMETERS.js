/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PARAMETERS', { 
    SPECIFIC_CATALOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    SPECIFIC_SCHEMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    SPECIFIC_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ORDINAL_POSITION: {
      type: DataTypes.INTEGER(21),
      allowNull: false,
      defaultValue: '0'
    },
    PARAMETER_MODE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PARAMETER_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
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
      allowNull: false,
    },
    ROUTINE_TYPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  });
};
