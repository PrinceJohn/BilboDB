/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INNODB_FT_CONFIG', { 
    KEY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    VALUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  });
};
