/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INNODB_FT_INDEX_CACHE', { 
    WORD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    FIRST_DOC_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    LAST_DOC_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    DOC_COUNT: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    DOC_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    POSITION: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  });
};
