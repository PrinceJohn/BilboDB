/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INNODB_SYS_FOREIGN', { 
    ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    FOR_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    REF_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    N_COLS: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    TYPE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  });
};
