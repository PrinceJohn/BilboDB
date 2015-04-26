/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PROFILING', { 
    QUERY_ID: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: '0'
    },
    SEQ: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: '0'
    },
    STATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    DURATION: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: false,
      defaultValue: '0.000000'
    },
    CPU_USER: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: true,
    },
    CPU_SYSTEM: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: true,
    },
    CONTEXT_VOLUNTARY: {
      type: DataTypes.INTEGER(20),
      allowNull: true,
    },
    CONTEXT_INVOLUNTARY: {
      type: DataTypes.INTEGER(20),
      allowNull: true,
    },
    BLOCK_OPS_IN: {
      type: DataTypes.INTEGER(20),
      allowNull: true,
    },
    BLOCK_OPS_OUT: {
      type: DataTypes.INTEGER(20),
      allowNull: true,
    },
    MESSAGES_SENT: {
      type: DataTypes.INTEGER(20),
      allowNull: true,
    },
    MESSAGES_RECEIVED: {
      type: DataTypes.INTEGER(20),
      allowNull: true,
    },
    PAGE_FAULTS_MAJOR: {
      type: DataTypes.INTEGER(20),
      allowNull: true,
    },
    PAGE_FAULTS_MINOR: {
      type: DataTypes.INTEGER(20),
      allowNull: true,
    },
    SWAPS: {
      type: DataTypes.INTEGER(20),
      allowNull: true,
    },
    SOURCE_FUNCTION: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    SOURCE_FILE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    SOURCE_LINE: {
      type: DataTypes.INTEGER(20),
      allowNull: true,
    }
  });
};
