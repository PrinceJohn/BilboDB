/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INNODB_SYS_DATAFILES', { 
    SPACE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    PATH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  });
};
