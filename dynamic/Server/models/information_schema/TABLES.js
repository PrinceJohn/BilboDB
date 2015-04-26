/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TABLES', { 
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
    TABLE_TYPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ENGINE: {
      type: DataTypes.STRING,
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
    AUTO_INCREMENT: {
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
    TABLE_COLLATION: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CHECKSUM: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    CREATE_OPTIONS: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    TABLE_COMMENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  });
};
