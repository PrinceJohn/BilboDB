/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('serviceauthorization', { 
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quota: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    companyid: {
      type: DataTypes.BIGINT,
      allowNull: false,
    }
  });
};
