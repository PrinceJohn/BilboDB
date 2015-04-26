// Imports
var Sequelize = require('sequelize');

// Credentials
var databaseName = 'information_schema',
	username = 'root',
	password = '123';

//Connect
var database = new Sequelize( databaseName, username, password, {
	port: 8889,
	host: 'localhost',
	define: {
        timestamps: false,
        freezeTableName: true,
    }
});

// Import all models
var models = [
	'tables',
	'columns'
];

// models.forEach(function(model) {
// 	module.exports[model] = database.import( __dirname + '/' + model );
// });

// db = {};

// models.forEach(function(model) {
// 	module.exports[model] = database.import( __dirname + '/' + model );
// 	db[model] = database.import( __dirname + '/' + model );
// });

// Object.keys(db).forEach(function(modelName) {
// 	if('associate' in db[modelName])
// 		db[modelName].associate(db);
// });

module.exports.sequelize = database;