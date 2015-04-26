/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EVENTS', { 
    EVENT_CATALOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    EVENT_SCHEMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    EVENT_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    DEFINER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    TIME_ZONE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    EVENT_BODY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    EVENT_DEFINITION: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    EVENT_TYPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    EXECUTE_AT: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    INTERVAL_VALUE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    INTERVAL_FIELD: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    SQL_MODE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    STARTS: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    ENDS: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ON_COMPLETION: {
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
    LAST_EXECUTED: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    EVENT_COMMENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ORIGINATOR: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
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
