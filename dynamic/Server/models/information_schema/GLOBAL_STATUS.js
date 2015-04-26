/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GLOBAL_STATUS', { 
    VARIABLE_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    VARIABLE_VALUE: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
