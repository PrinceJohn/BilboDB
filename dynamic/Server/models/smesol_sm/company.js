/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company', { 
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
    companyid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    domain: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    serviceproviderid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id_seq: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    companynumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    noagent_ivr_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    noagent_promptid: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
