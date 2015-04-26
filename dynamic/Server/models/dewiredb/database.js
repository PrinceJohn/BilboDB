/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
	var database = sequelize.define('database', { 
		id: {
		  type: DataTypes.INTEGER(11),
		  allowNull: false,
		},
		name: {
		  type: DataTypes.STRING,
		  allowNull: false,
		}
	},

	{
		classMethods: {
			associate: function(models) {
				// database.hasMany(models.table, {as: 'table'});
			}
		}
	}
	);
	return database;
};
