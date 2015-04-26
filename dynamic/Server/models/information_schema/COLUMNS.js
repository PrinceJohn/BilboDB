/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('COLUMNS', { 
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
    COLUMN_DEFAULT: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    IS_NULLABLE: {
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
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    CHARACTER_OCTET_LENGTH: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    NUMERIC_PRECISION: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    NUMERIC_SCALE: {
      type: DataTypes.BIGINT,
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
    COLUMN_TYPE: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    COLUMN_KEY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    EXTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    PRIVILEGES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    COLUMN_COMMENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  });
};
