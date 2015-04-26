/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TRIGGERS', { 
    TRIGGER_CATALOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    TRIGGER_SCHEMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    TRIGGER_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    EVENT_MANIPULATION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    EVENT_OBJECT_CATALOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    EVENT_OBJECT_SCHEMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    EVENT_OBJECT_TABLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ACTION_ORDER: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    ACTION_CONDITION: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ACTION_STATEMENT: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ACTION_ORIENTATION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ACTION_TIMING: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ACTION_REFERENCE_OLD_TABLE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ACTION_REFERENCE_NEW_TABLE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ACTION_REFERENCE_OLD_ROW: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ACTION_REFERENCE_NEW_ROW: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CREATED: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    SQL_MODE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
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
