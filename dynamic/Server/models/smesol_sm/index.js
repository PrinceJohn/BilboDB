// Imports
var Sequelize = require('sequelize');

// Credentials
var databaseName = 'smesol_sm',
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
	'agent',
	'appuser',
	'appuser_role',
	'appuser_serviceprovider',
	'appuserrole',
	'auto_attendant',
	// 'cdg',
	'company',
	'endpoint',
	'fnr_notification_receivers',
	'fnrtype',
	// 'function_number',
	'job',
	'prompt',
	'prompt_fnrtype',
	'prompt_promptcategory',
	'promptcategory',
	'property',
	'role',
	'schema_version',
	'service_provider',
	'serviceauthorization',
	'user',
	'user_identity',
	'userrole'
];

// models.forEach(function(model) {
// 	module.exports[model] = database.import( __dirname + '/' + model );
// });

db = {};

models.forEach(function(model) {
	module.exports[model] = database.import( __dirname + '/' + model );
	db[model] = database.import( __dirname + '/' + model );
});

Object.keys(db).forEach(function(modelName) {
	if('associate' in db[modelName])
		db[modelName].associate(db);
});

module.exports.sequelize = database;