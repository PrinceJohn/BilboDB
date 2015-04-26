/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('relations', { 
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    table1id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    table2id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    }
  });
};
