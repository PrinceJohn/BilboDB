/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var table = sequelize.define('table', { 
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sortBy: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    }
  },

  {
    classMethods: {
      associate: function(models) {
        table.belongsTo(models.database);
        //table.hasMany(models.table, {as: 'relatedTables'});
      }
    }
  }
  );

  return table;
};
