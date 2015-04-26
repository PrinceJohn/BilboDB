/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INNODB_SYS_TABLES', { 
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
    FLAG: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    N_COLS: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    SPACE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    FILE_FORMAT: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ROW_FORMAT: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ZIP_PAGE_SIZE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  });
};
