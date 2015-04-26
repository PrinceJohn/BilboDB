/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INNODB_BUFFER_PAGE', { 
    POOL_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    BLOCK_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    SPACE: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    PAGE_NUMBER: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    PAGE_TYPE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    FLUSH_TYPE: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    FIX_COUNT: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    IS_HASHED: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    NEWEST_MODIFICATION: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    OLDEST_MODIFICATION: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    ACCESS_TIME: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    TABLE_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    INDEX_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    NUMBER_RECORDS: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    DATA_SIZE: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    COMPRESSED_SIZE: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    PAGE_STATE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    IO_FIX: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    IS_OLD: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    FREE_PAGE_CLOCK: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  });
};
