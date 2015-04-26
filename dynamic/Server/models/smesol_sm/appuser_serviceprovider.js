/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appuser_serviceprovider', { 
    appuserid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    serviceprovider: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
