/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdg', { 
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    cdgid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    noagent_overflowaction: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    noagent_transferto_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    queuealgorithm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    acd_feature_identifier: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    greetingprompt_isactive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    progress_promptid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    greeting_promptid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    progressprompt_isactive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    overflow_action: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    overflow_transferto_number: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
