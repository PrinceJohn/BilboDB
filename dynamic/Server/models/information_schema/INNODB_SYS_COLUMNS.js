/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INNODB_SYS_COLUMNS', { 
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
    POS: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    MTYPE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    PRTYPE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    LEN: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  });
};
