/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agent', { 
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    cdg_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    prio: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
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
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
