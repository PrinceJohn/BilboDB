/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('function_number', { 
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    fnr_type: {
      type: DataTypes.STRING,
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
    identifyingnumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyid: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    queueisclosed_overflowaction: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    queueisclosed_promptid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    queueisclosed_transferto_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    queueisclosed_transfer_promptid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    voicemail_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    voicemail_promptid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    schedule_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    open: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  });
};
