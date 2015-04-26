/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prompt_promptcategory', { 
    promptid: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    categoryid: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
