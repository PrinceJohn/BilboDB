/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INNODB_FT_DEFAULT_STOPWORD', { 
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  });
};
