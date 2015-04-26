/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job', { 
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    orderid: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    result: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    result_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    future_location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    companyid: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
