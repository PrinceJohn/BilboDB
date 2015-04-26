/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FILES', { 
    FILE_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    FILE_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    FILE_TYPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    TABLESPACE_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    TABLE_CATALOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    TABLE_SCHEMA: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    TABLE_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LOGFILE_GROUP_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LOGFILE_GROUP_NUMBER: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    ENGINE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    FULLTEXT_KEYS: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DELETED_ROWS: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    UPDATE_COUNT: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    FREE_EXTENTS: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    TOTAL_EXTENTS: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    EXTENT_SIZE: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    INITIAL_SIZE: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    MAXIMUM_SIZE: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    AUTOEXTEND_SIZE: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    CREATION_TIME: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    LAST_UPDATE_TIME: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    LAST_ACCESS_TIME: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    RECOVER_TIME: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    TRANSACTION_COUNTER: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    VERSION: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    ROW_FORMAT: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    TABLE_ROWS: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    AVG_ROW_LENGTH: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    DATA_LENGTH: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    MAX_DATA_LENGTH: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    INDEX_LENGTH: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    DATA_FREE: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    CREATE_TIME: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    UPDATE_TIME: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    CHECK_TIME: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    CHECKSUM: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    EXTRA: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
