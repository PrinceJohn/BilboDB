// var express = require('express'),
// 	sequelize = require('sequelize');

// // var app = exports.app = express(),
// // 	port = 8080;

// // app.set('port', port );

// // var index = function(req, res) {
// // 	res.sendfile('index.html', {root: '../Client/dist/'});
// // };

// // app.get('/', function(req, res) {
// //	res.render('index', {});
// // });

// // app.use('/assets', express.static('../Client/dist/assets'));
// // app.use('/img', express.static('../Client/dist/img'));

// // var server = require('http').createServer(app).listen(port);

// SELECT * FROM columns WHERE table_schema='smesol_sm' AND table_name='agent'

// var database 			= require('./models/smesol_sm'),
var	dewiredb 			= require('./models/dewiredb'),
	restify 			= require('restify'),
    epilogue 			= require('epilogue'),
    information_schema 	= require('./models/information_schema'),
    smesol_sm			= require('./models/smesol_sm');

// Initialize server
var server = restify.createServer();
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.listen('3006');

// Credentials
var databaseName = 'information_schema',
	username = 'root',
	password = '123';

//Connect
// var information_schema = new information_schema( databaseName, username, password, {
// 	port: 8889,
// 	host: 'localhost',
// 	define: {
//         timestamps: false,
//         freezeTableName: true,
//     }
// });
// 
// Importing models works with information schema, but no other
// var informationModels = require('sequelize-import')( __dirname+ '/models/' + databaseName , information_schema, { 
//     exclude: ['index.js'] 
// });


// Restify routes
function getDatabases(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  dewiredb.database.findAll().then(function(data){
  		var Databases = data,
  			output = [],
  			obj,
  			Database,
  			Tables = [];

  		for( var i = 0 ; i < Databases.length ; i++ ) {
  			Database = Databases[i];
  			// //console.log(Database);
  			// for( var j = 0 ; j < Database.table.length ; j++ ) {
  			// 	//Tables.push( Database.table[j].TABLE_NAME );
  			// }

  			information_schema.sequelize.query( 'SELECT TABLE_SCHEMA, TABLE_NAME FROM TABLES WHERE TABLE_SCHEMA="smesol_sm"')
		  		.then(function( table ) {
		  			for( var i = 0 ; i < table[0].length ; i++ ) {
		  				Tables.push( table[0][i].TABLE_NAME + '-' + i );
		  			}

	  			  	obj = {
						id:		Database.name,
						name: 	Database.name,
						table:	Tables
					};
		  		  	
		  		  	output.push(obj);

		  		  	res.send(output);
		  		});
  		}
  });
}

function getTable( req, res, next ) {
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	
	information_schema.sequelize.query( 'SELECT TABLE_SCHEMA, TABLE_NAME FROM TABLES WHERE TABLE_SCHEMA="smesol_sm"' ).then( function( table ) {

		var id = (req.params.table_id).split('-');

		var name 			= table[0][id[1]].TABLE_NAME,
			relatedTables 	= [],
			rows 			= [],
			database		= 'smesol_sm',
			obj 			= {};

		rows.push(1);
		information_schema.sequelize.query( 'SELECT TABLE_NAME, COLUMN_NAME FROM COLUMNS WHERE TABLE_NAME = "'+ name +'"' ).then( function( column ) {

			var columns = [];

			for( var i = 0 ; i < column.length ; i++ ) {
				columns.push( name+'-'+id[1]+'-'+column[0][i].COLUMN_NAME+'-'+i );
			}

			obj['id'] = req.params.table_id;
			obj['name'] = name;
			obj['relatedTables'] = relatedTables;
			obj['columns'] = columns;
			obj['rows'] = rows;
			obj['database'] = database;
			obj['sortBy'] = 0;

			var data = {
				table: obj
			}

			res.send( data );
		});
	});

}

function getColumns( req, res, next ) {
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	var table,
		db;

	for( var name in dewiredb ) {
		db = name;
		//JSON.stringify(db);

		if( req.params.tableName == db ) {
			console.log("Found a table with name " + db );
			db = name;
			break;
		}
	}

	dewiredb.db.findAll().then( function(data){
		res.send(data);
	});
}

function getColumn ( req, res, next ) {
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	var params 		= (req.params.table_id).split('-'),
		tableName 	= params[0],
		tableId 	= params[1],
		columnName 	= params[2],
		columnId 	= params[3],
		columnObj 	= {};

	columnObj['id'] 		= req.params.table_id;
	columnObj['name']	 	= columnName;
	columnObj['attribute'] 	= 'string';
	columnObj['table'] 		= tableName + '-' + tableId;

	var data = {
		column: columnObj
	}

	res.send(data);

	// information_schema.sequelize.query( 'SELECT TABLE_NAME, COLUMN_NAME FROM COLUMNS WHERE TABLE_NAME = "'+ tableName +'" AND COLUMN_NAME ="'+columnNAME+'"').then( function( column ) {
	// });


}

function getRow ( req, res, next ) {
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	var row = {},
		table = [];
		rowcontents = [];

	row["id"] = 1;
	rowcontents.push(1);
	row["rowcontents"] = rowcontents;
	table.push(14);

	var data = {
		row: row
	}

	res.send(data);
}

server.get( '/database', getDatabases );
server.get( '/table/:table_id', getTable );
server.get( '/columns/:tableName', getColumns );
server.get( '/column/:table_id', getColumn);
server.get( 'row/:table_id', getRow );


// //Initialize databases and and server
// database.sequelize
// 	.sync({ force: false })
// 	.then(function() {
// 	 });

dewiredb.sequelize
	.sync({ force: false })
	.then(function() {
	 });

information_schema.sequelize
	.sync({ force: false })
	.then(function() {
	});

smesol_sm.sequelize
	.sync({ force: false })
	.then(function() {
		server.listen(function() {
			console.log('%s listening at %s', server.name, server.url);
		});
	});



