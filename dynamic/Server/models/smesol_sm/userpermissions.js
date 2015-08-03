/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userpermissions', { 
    Id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    OrganisationId: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
    },
    UserId: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
    },
    TeliaId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    TeamId: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
    },
    RoleId: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    RoleName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CompetenceId: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
    },
    Start: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
    },
    Stop: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
    }
  });
};
