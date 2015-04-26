/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PARTITIONS', { 
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
    PARTITION_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    SUBPARTITION_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PARTITION_ORDINAL_POSITION: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    SUBPARTITION_ORDINAL_POSITION: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    PARTITION_METHOD: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    SUBPARTITION_METHOD: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PARTITION_EXPRESSION: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    SUBPARTITION_EXPRESSION: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    PARTITION_DESCRIPTION: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    TABLE_ROWS: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    AVG_ROW_LENGTH: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    DATA_LENGTH: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    MAX_DATA_LENGTH: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    INDEX_LENGTH: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    DATA_FREE: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
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
    PARTITION_COMMENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    NODEGROUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    TABLESPACE_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
