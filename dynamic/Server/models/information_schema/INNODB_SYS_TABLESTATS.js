/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INNODB_SYS_TABLESTATS', { 
    TABLE_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    STATS_INITIALIZED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    NUM_ROWS: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    CLUST_INDEX_SIZE: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    OTHER_INDEX_SIZE: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    MODIFIED_COUNTER: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    AUTOINC: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    REF_COUNT: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  });
};
