/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('factteamsales', { 
    Id: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    TimeId: {
      type: DataTypes.INTEGER(6),
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
    Achieved: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
    },
    Goal: {
      type: DataTypes.DECIMAL(16,10),
      allowNull: true,
    },
    AchievedPercent: {
      type: DataTypes.DECIMAL(11,10),
      allowNull: true,
    },
    Bonus: {
      type: DataTypes.DECIMAL(20,10),
      allowNull: true,
    },
    PredictionAchieved: {
      type: DataTypes.DECIMAL(20,10),
      allowNull: true,
    },
    PredictionBonus: {
      type: DataTypes.DECIMAL(20,10),
      allowNull: true,
    }
  });
};
