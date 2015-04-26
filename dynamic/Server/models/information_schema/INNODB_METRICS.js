/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INNODB_METRICS', { 
    NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    SUBSYSTEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    COUNT: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    MAX_COUNT: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    MIN_COUNT: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    AVG_COUNT: {
      type: 'DOUBLE',
      allowNull: true,
    },
    COUNT_RESET: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    MAX_COUNT_RESET: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    MIN_COUNT_RESET: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    AVG_COUNT_RESET: {
      type: 'DOUBLE',
      allowNull: true,
    },
    TIME_ENABLED: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    TIME_DISABLED: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    TIME_ELAPSED: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    TIME_RESET: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    TYPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    COMMENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  });
};
