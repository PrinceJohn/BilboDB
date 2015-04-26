/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CHARACTER_SETS', { 
    CHARACTER_SET_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    DEFAULT_COLLATE_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    DESCRIPTION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    MAXLEN: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  });
};
