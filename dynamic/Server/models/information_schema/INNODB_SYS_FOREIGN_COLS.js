/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INNODB_SYS_FOREIGN_COLS', { 
    ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    FOR_COL_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    REF_COL_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    POS: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  });
};
