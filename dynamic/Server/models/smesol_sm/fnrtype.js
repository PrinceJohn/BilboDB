/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fnrtype', { 
    fnrtype: {
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
    }
  });
};
