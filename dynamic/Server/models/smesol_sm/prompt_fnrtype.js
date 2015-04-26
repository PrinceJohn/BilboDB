/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prompt_fnrtype', { 
    promptid: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    fnrtype: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
