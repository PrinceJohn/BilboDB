/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INNODB_SYS_TABLESPACES', { 
    SPACE: {
      type: DataTypes.INTEGER(11),
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
    FILE_FORMAT: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ROW_FORMAT: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PAGE_SIZE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    ZIP_PAGE_SIZE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  });
};
