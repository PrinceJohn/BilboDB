/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', { 
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
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fixednumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    msisdn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teleposecret: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telepotoken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telepo_token_valid_until: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    telepouserid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyid: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    msisdn_type: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
