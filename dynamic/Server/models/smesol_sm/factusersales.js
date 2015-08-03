/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('factusersales', { 
    Id: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    },
    TimeId: {
      type: DataTypes.INTEGER(6),
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
    CompetenceId: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    OrganisationId: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
    },
    ProductGroupId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Achieved: {
      type: DataTypes.DECIMAL(14,10),
      allowNull: true,
    },
    Goal: {
      type: DataTypes.DECIMAL(14,10),
      allowNull: true,
    },
    AchievedPercent: {
      type: DataTypes.DECIMAL(11,10),
      allowNull: true,
    },
    Bonus: {
      type: DataTypes.DECIMAL(13,10),
      allowNull: true,
    },
    PredictionAchieved: {
      type: DataTypes.DECIMAL(14,10),
      allowNull: true,
    },
    PredictionBonus: {
      type: DataTypes.DECIMAL(13,10),
      allowNull: true,
    }
  });
};
