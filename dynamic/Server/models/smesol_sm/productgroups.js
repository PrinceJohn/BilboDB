/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productgroups', { 
    Id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    Name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    OrganisationId: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
    },
    Timestamp: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
