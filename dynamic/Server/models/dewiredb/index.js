// Imports
var Sequelize = require('sequelize');

// Credentials
var databaseName = 'dewiredb',
	username = 'root',
	password = '123';

//Connect
var dewiredb = new Sequelize( databaseName, username, password, {
	port: 8889,
	host: 'localhost',
	define: {
        timestamps: false,
        freezeTableName: true,
    }
});

// Import all models
var models = [
	'database'
],

db = {};

models.forEach(function(model) {
	module.exports[model] = dewiredb.import( __dirname + '/' + model );
	db[model] = dewiredb.import( __dirname + '/' + model );
});

// Object.keys(db).forEach(function(modelName) {
// 	if('associate' in db[modelName])
// 		db[modelName].associate(db);
// });

module.exports.sequelize = dewiredb;