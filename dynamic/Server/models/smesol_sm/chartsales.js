/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chartsales', { 
    Id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    TimeId: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
    },
    DateId: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    UserId: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
    },
    TeamId: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    OrganisationId: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
    },
    ProductGroupId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Achieved: {
      type: DataTypes.DECIMAL(14,10),
      allowNull: true,
    },
    Goal: {
      type: DataTypes.DECIMAL(14,10),
      allowNull: true,
    },
    PredictionAchieved: {
      type: DataTypes.DECIMAL(20,10),
      allowNull: false,
      defaultValue: '0.0000000000'
    }
  });
};
