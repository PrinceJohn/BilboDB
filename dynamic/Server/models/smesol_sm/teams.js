/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teams', { 
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Name: {
      type: 'CHAR(30)',
      allowNull: false,
    },
    OrganisationId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    CostCenter: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Times: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  });
};
