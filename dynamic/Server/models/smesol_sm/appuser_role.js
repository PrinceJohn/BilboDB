/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appuser_role', { 
    appuserid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
