/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('STATISTICS', { 
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
    NON_UNIQUE: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    INDEX_SCHEMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    INDEX_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    SEQ_IN_INDEX: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    COLUMN_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    COLLATION: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CARDINALITY: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    SUB_PART: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    PACKED: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    NULLABLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    INDEX_TYPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    COMMENT: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    INDEX_COMMENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  });
};
