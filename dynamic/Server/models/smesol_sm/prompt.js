/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prompt', { 
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
    prompt_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyid: {
      type: DataTypes.BIGINT,
      allowNull: true,
    }
  });
};
