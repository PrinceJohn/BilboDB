// var database 			= require('./models/smesol_sm'),
var	dewiredb 			= require('./models/dewiredb'),
	restify 			= require('restify'),
    epilogue 			= require('epilogue'),
    information_schema 	= require('./models/information_schema'),
    smesol_sm			= require('./models/smesol_sm');
    present 			= require('present');

// Initialize server
var server = restify.createServer();
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.listen('3020');

// Credentials
// var databaseName = 'information_schema',
// 	username = 'root',
// 	password = '123';

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
function getColumn ( req, res, next ) {
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	var params 			= (req.params.table_id).split('-'),
		databaseName 	= params[0],
		tableName 		= params[1],
		columnName 		= params[2],
		columnId		= params[3],
		columnObj 		= {};

	// Check if the column is a primary key
	information_schema.sequelize.query( 'SELECT TABLE_SCHEMA, TABLE_NAME, COLUMN_NAME, COLUMN_KEY FROM COLUMNS WHERE COLUMN_NAME = "'+ columnName +'" AND TABLE_SCHEMA="'+ databaseName +'" AND TABLE_NAME="' + tableName + '"').then( function( primaryKey ) {
		// Check if the column is a foreign key
		information_schema.sequelize.query( 'SELECT ID, FOR_COL_NAME, REF_COL_NAME FROM INNODB_SYS_FOREIGN_COLS WHERE ID LIKE "' + databaseName + '%' + '" AND ID LIKE "' + '%' + tableName + '%' + '" AND ( FOR_COL_NAME="'+ columnName + '" OR REF_COL_NAME="' + columnName + '")').then( function( foreignKey ) {

			console.log( primaryKey );
			console.log( foreignKey );

			columnObj['id'] 		= req.params.table_id;
			columnObj['name']	 	= columnName;
			columnObj['attribute'] 	= 'string';
			columnObj['table'] 		= databaseName + '-' + tableName;

			if( primaryKey[0][0].COLUMN_KEY === 'PRI' ) {
				columnObj['isPrimaryKey'] = true;
			} else if( foreignKey[0].length ){
				columnObj['isForeignKey'] = true;
			}

			var data = {
				column: columnObj
			}

			res.send(data);

		});
	});
}


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

  			information_schema.sequelize.query( 'SELECT TABLE_SCHEMA, TABLE_NAME FROM TABLES WHERE TABLE_SCHEMA="'+ Database.name +'"')
		  		.then(function( table ) {
		  			for( var i = 0 ; i < table[0].length ; i++ ) {
		  				Tables.push( Database.name + '-' + table[0][i].TABLE_NAME );
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

function delRow( req, res, next ) {
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	var params			= (req.params.row_id).split('-'),
		columns 		= [],
		databaseName 	= params[0],
		tableName 		= params[1],
		rowNumber 		= params[3],
		queryTable		= Object.byString( smesol_sm, tableName );

	// Get the columns (because Sequelize)
	information_schema.sequelize.query( 'SELECT TABLE_NAME, COLUMN_NAME FROM COLUMNS WHERE TABLE_NAME="'+ tableName +'" AND TABLE_SCHEMA="' + databaseName +'"').then( function( column ) {

		for( var i = 0 ; i < column[0].length ; i++ ) {
			columns.push( column[0][i].COLUMN_NAME );
		}

		queryTable.find({ attributs: columns, limit: 1, offset: rowNumber }).then( function( rowData ) {
			rowData.destroy().then( function( msg ) {
				console.log(msg);
				res.send(200);
			});
		});
	});
}

function getRow ( req, res, next ) {
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	var params			= (req.params.table_id).split('-'),
		databaseName 	= params[0],
		tableName 		= params[1],
		rowNumber 		= params[3],
		row 			= {},
		rowcontents		= [],
		i 				= 0,
		y				= 0;

	var queryTable = Object.byString( smesol_sm, tableName );

	// Get the number of columns in the table
	information_schema.sequelize.query( 'SELECT TABLE_NAME, COLUMN_NAME FROM COLUMNS WHERE TABLE_NAME="'+ tableName +'" AND TABLE_SCHEMA="' + databaseName +'"').then( function( column, err ) {
		// Get how many rows there are in the table
		var noOfColumns = column[0].length,
			cellNumber 	= 0;

		// Calculate the cell number
		for( i = 0 ; i < noOfColumns ; i++ ) {
			cellNumber = rowNumber * noOfColumns + i;
			rowcontents.push( req.params.table_id + '-rowcontent-' + i )
		}

		row["id"] 			= req.params.table_id;
		row["rowcontents"] 	= rowcontents;
		row["table"] 		= databaseName + '-' + tableName;

		var data = {
			row: row
		}

		res.send(data);
	});
}

function delRowcontent( req, res, next ) {
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	console.log( "delRowcontent" );
	res.send(200);
}

function getRowcontent( req, res, next ) {
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	var params 			= (req.params.table_id).split('-'),
		databaseName 	= params[0],
		tableName		= params[1],
		rowNumber 		= params[3],
		cellNumber 		= params[5],
		rowcontent		= {},
		data 			= {},
		columns			= [],
		queryTable		= Object.resolve( tableName, smesol_sm );

	// Get the available columns (otherwise sequelize will automatically try to find id)
	information_schema.sequelize.query( 'SELECT TABLE_NAME, COLUMN_NAME FROM COLUMNS WHERE TABLE_NAME="'+ tableName +'" AND TABLE_SCHEMA="' + databaseName +'"').then( function( column ) {

		for( var i = 0 ; i < column[0].length ; i++ ) {
			columns.push( column[0][i].COLUMN_NAME );
		}

		queryTable.findAll({limit: 1, offset: rowNumber, attributes: columns }).then( function( rowData ) {

			var rowKey 	= Object.keys(rowData[0].dataValues)[ cellNumber ];
			var	val 	= Object.resolve( rowKey, rowData[0].dataValues );

			if( val == null ) {
				val = "NULL";
			}


			rowcontent["id"] 	= req.params.table_id;
			rowcontent["val"] 	= val;
			rowcontent["row"] 	= databaseName + '-' + tableName + '-row-' + rowNumber;

			data = {
				rowcontent: rowcontent
			}

			res.send( data );
		});
	});
}

function putRowcontent( req, res, next ) {

	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	var params 			= (req.params.rowcontent_id).split('-'),
		columns 		= [],
		databaseName 	= params[0],
		tableName		= params[1],
		rowNumber 		= params[3],
		cellNumber 		= params[5],
		value 			= req.params.rowcontent.val,
		queryTable 		= Object.resolve( tableName, smesol_sm );

	// First find the column which the value is associated with
	information_schema.sequelize.query( 'SELECT TABLE_NAME, COLUMN_NAME FROM COLUMNS WHERE TABLE_NAME = "'+ tableName +'" AND TABLE_SCHEMA="' + databaseName +'"').then( function( column ) {

		for( var i = 0 ; i < column[0].length ; i++ ) {
			columns.push( column[0][i].COLUMN_NAME );
		}

		var columnObj = JSON.parse('{ "'+ columns[ cellNumber ] +'":"'+value+'"}');
		console.log( columnObj );

		queryTable.find({ attributes: columns, limit: 1, offset: rowNumber }).then( function( cell ) {
			if( cell ) {
				// cell.updateAttributes( columnObj )
				// 	.success( function() {
				// 		console.log( "Succesfully updated the value!" );
				// 		res.send(200);
				// 	})
				// 	.error( function() {
				// 		console.log("Failed");
				// 		res.send(400);
				// 	});

				cell.updateAttributes( columnObj )
					.then( function() {
						console.log( "Succesfully updated the value!" );
					});
			}
		});
	});

}

function getTable( req, res, next ) {
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	
	console.log( req );

	var params 			= (req.params.table_id).split('-'),
		databaseName 	= params[0],
		tableName 		= params[1],
		relatedTables 	= [],
		rows 			= [],
		columns 		= [],
		queryColumns	= [],
		obj 			= {};

	var queryTable 	= Object.byString( smesol_sm, tableName );

	// Get all columns associated with the table
	information_schema.sequelize.query( 'SELECT TABLE_NAME, COLUMN_NAME FROM COLUMNS WHERE TABLE_NAME = "'+ tableName +'" AND TABLE_SCHEMA="' + databaseName +'"').then( function( column ) {
		
		// A column used as an attribute to prevent sequelize automatic id behaviour
		queryColumns.push( column[0][0].COLUMN_NAME );

		// Get all rows asscoiated with the table
		queryTable.findAndCountAll( {attributes: queryColumns }).then( function(smesolData ) {
			// Get all relations from current table to related table(s)
			information_schema.sequelize.query( 'SELECT FOR_NAME, REF_NAME FROM INNODB_SYS_FOREIGN WHERE FOR_NAME="' + databaseName + '/' + tableName + '"').then( function( relatedTable ) {
				// Get all relations from related table(s) to current table
				information_schema.sequelize.query( 'SELECT FOR_NAME, REF_NAME FROM INNODB_SYS_FOREIGN WHERE REF_NAME="' + databaseName + '/' + tableName + '"').then( function( otherRelatedTable ) {

					var i = 0;

					// Push all columns
					for( i = 0 ; i < column[0].length ; i++ ) {
						columns.push( databaseName + '-' + tableName + '-' + column[0][i].COLUMN_NAME + '-' + i );
					}

					// Push all rows
					for( i = 0 ; i < smesolData.count ; i++ ) {
						rows.push(databaseName + '-' + tableName + '-row-' + i);
					}

					// Push related tables
					for( i = 0 ; i < relatedTable.length ; i++  ) {
						if( relatedTable[0][i] ) {
							var rTable = relatedTable[0][i].REF_NAME.split('/');
							relatedTables.push( databaseName + '-' + rTable[1] );
						}
					}

					// Push related tables
					for( i = 0 ; i < otherRelatedTable.length ; i ++ ) {
						if( otherRelatedTable[0][i] ) {
							var oRTable = otherRelatedTable[0][i].FOR_NAME.split('/');
							relatedTables.push( databaseName + '-' + oRTable[1] );
						}
					}

					obj['id'] = req.params.table_id;
					obj['name'] = tableName;
					obj['relatedTables'] = relatedTables;
					obj['columns'] = columns;
					obj['rows'] = rows;
					obj['database'] = databaseName;
					obj['sortBy'] = 0;

					var data = {
						table: obj
					}

					res.send( data );
				});
			});
		});
	});
}

function predictionTest( req, res, next ) {
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	
	console.log( req.params );

	information_schema.sequelize.query('SELECT TABLE_SCHEMA, TABLE_NAME, GROUP_CONCAT( COLUMN_NAME ) AS COLUMNS FROM COLUMNS WHERE TABLE_SCHEMA="'+ req.params.databaseName +'" GROUP BY TABLE_NAME').then( function( table ) {
		information_schema.sequelize.query('SELECT TABLE_SCHEMA, TABLE_NAME, COLUMN_NAME, DATA_TYPE, COLUMN_KEY FROM COLUMNS WHERE TABLE_SCHEMA="'+req.params.databaseName+'"').then( function( columnTypes ) {
			information_schema.sequelize.query( 'SELECT FOR_NAME AS relatedTable, REF_NAME AS "table" FROM INNODB_SYS_FOREIGN WHERE FOR_NAME LIKE "' + req.params.databaseName + '%"').then( function( correctRelations ) {
				var tables 						= table[0],
					predictedRelations 			= [],
					relation 					= {},
					columns 					= [],
					allowedDistance 			= req.params.allowedDistance,
					numberOfCorrectRelations 	= 0,
					allowSubstring 				= false,
					dataType1					= null,
					dataType2					= null;

				if( req.params.allowSubstring == 1 ) {
					allowSubstring = true;
				}


				// Prepare the correct tables
				for( var i = 0 ; i < correctRelations[0].length ; i++ ) {
					correctRelations[0][i].relatedTable = correctRelations[0][i].relatedTable.split('/')[1].toLowerCase();
					correctRelations[0][i].table = correctRelations[0][i].table.split('/')[1].toLowerCase();
				}
				
				// Measure the time taken to execute
				var t0 = present(), t1 = present(), totalt0 = 0, totalt1 = 0;

				for( var q =  0 ; q < 10000 ; q++ ) {
				t0 = present();
				console.log("t0: ", t0);

				// Current table name
				for( var x = 0 ; x < tables.length ; x++ ) {
					// All the other tables
					for ( var y = 0 ; y < tables.length ; y++ ) {
						// Do not compare the table name with itself
						if( tables[x].TABLE_NAME === tables[y].TABLE_NAME )
							continue;

						columns = tables[y].COLUMNS.split(',');
						// Search in every column of selected table
						for( var z = 0 ; z < columns.length ; z++ ) {
							var tableName = tables[x].TABLE_NAME;
							//Check if it is a substring (if allowed)
							if( ( columns[z].indexOf( tableName ) > -1 ) && allowSubstring ) {
								// Is the match within the allowed cost?
								if(  getLevenshteinDistance( tables[x].TABLE_NAME, columns[z] ) <= allowedDistance ) {
									
									// Check what datatype the primary key is
									for( var i = 0 ; i < columnTypes[0].length ; i++ ) {
										if( ( tables[x].TABLE_NAME == columnTypes[0][i].TABLE_NAME ) && ( columnTypes[0][i].COLUMN_KEY == "PRI" ) ) {
											//console.log("Primary key datatype is " + columnTypes[0][i].DATA_TYPE );
											dataType1 = columnTypes[0][i].DATA_TYPE;
										}
									}

									// Check what datatype the related column is
									for( var i = 0 ; i < columnTypes[0].length ; i++ ) {
										if( ( tables[y].TABLE_NAME == columnTypes[0][i].TABLE_NAME ) && ( columns[z] == columnTypes[0][i].COLUMN_NAME ) ) {
											//console.log("Foreign key datatypes is " + columnTypes[0][i].DATA_TYPE );
											dataType2 = columnTypes[0][i].DATA_TYPE
										}
									}

									if( dataType1 == dataType2 ) {
										// If we find a suitable match, break and continue searching in the next table
										//console.log( tables[x].TABLE_NAME, tables[y].TABLE_NAME, columns[z] );
										//console.log( columns[z].indexOf( tableName ) );
										//console.log( getLevenshteinDistance( tables[x].TABLE_NAME, columns[z] ) );
										relation["relatedTable"] = tables[y].TABLE_NAME.toLowerCase();
										relation["table"] = tables[x].TABLE_NAME.toLowerCase();
										//relation["ForeignKey"] = columns[z];
										predictedRelations.push(relation);
										relation = {};
										break;
									}
								}
							}
							// Else check with only levenshtein
							else if( ( getLevenshteinDistance( tables[x].TABLE_NAME, columns[z] ) <= allowedDistance ) && !allowSubstring ) {
								// Check what datatype the primary key is
								for( var i = 0 ; i < columnTypes[0].length ; i++ ) {
									if( ( tables[x].TABLE_NAME == columnTypes[0][i].TABLE_NAME ) && ( columnTypes[0][i].COLUMN_KEY == "PRI" ) ) {
										//console.log("Primary key datatype is " + columnTypes[0][i].DATA_TYPE );
										dataType1 = columnTypes[0][i].DATA_TYPE;
									}
								}

								// Check what datatype the related column is
								for( var i = 0 ; i < columnTypes[0].length ; i++ ) {
									if( ( tables[y].TABLE_NAME == columnTypes[0][i].TABLE_NAME ) && ( columns[z] == columnTypes[0][i].COLUMN_NAME ) ) {
										//console.log("Foreign key datatypes is " + columnTypes[0][i].DATA_TYPE );
										dataType2 = columnTypes[0][i].DATA_TYPE
									}
								}

								if( dataType1 == dataType2 ) {
									// If we find a suitable match, break and continue searching in the next table
									//console.log( tables[x].TABLE_NAME, tables[y].TABLE_NAME, columns[z] );
									//console.log( columns[z].indexOf( tableName ) );
									//console.log( getLevenshteinDistance( tables[x].TABLE_NAME, columns[z] ) );
									relation["relatedTable"] = tables[y].TABLE_NAME.toLowerCase();
									relation["table"] = tables[x].TABLE_NAME.toLowerCase();
									//relation["ForeignKey"] = columns[z];
									predictedRelations.push(relation);
									relation = {};
									break;
								}
							}
						}
					}
				}
				t1 = present();
				console.log("t1: ", t1);
				console.log("Difference: ", t1 - t0 );
				totalt0 += (t1 - t0)
				console.log("Totalt0: ", totalt0 );
				}//Time for

				//console.log( totalt1, totalt0 );
				var totalTime = totalt0/10000;
				console.log("Total time: ", totalTime);

				var wrongPredictions 		= 0,
					noMatchFound 			= true,
					copyCorrectRelations 	= correctRelations;
				
				// See if corrections match
				if( predictedRelations.length ) {
					for( var i = 0 ; i < predictedRelations.length ; i++ ) {
						for( var x = 0 ; x < correctRelations[0].length ; x++ ) {
							//console.log("Comparing "+ JSON.stringify( predictedRelations[i] ) + " with " + JSON.stringify( correctRelations[0][x] ) );
							if( JSON.stringify( predictedRelations[i] ) == JSON.stringify( correctRelations[0][x] ) ){
								//correctRelations[0][x]["CorrectPrediction"] = true;
								//copyCorrectRelations[0][x]["CorrectPrediction"] = true;
								//console.log("Found match for " + JSON.stringify( predictedRelations[i] ) + " " + JSON.stringify( correctRelations[0][x] ) );
								numberOfCorrectRelations++;
								noMatchFound = false;
								break;
							}
						}
						// If we didn't find a match, that prediction was false
						if( noMatchFound ) {
							//console.log("No match found for " + JSON.stringify( predictedRelations[i] ) );
							wrongPredictions++;
						}
						noMatchFound = true;
					}
				} else {
					predictedRelations.push('{"correctPredictions":"0%"}');
				}

				//console.log(correctRelations[0]);
				//console.log(predictedRelations);
				var predictedRelationsLength = predictedRelations.length;
				console.log("No predictions: " + predictedRelationsLength );
				predictedRelations.push('{"numberOfPredictions":"'+predictedRelations.length+'"}');
				predictedRelations.push('{"correctPredictions":"'+numberOfCorrectRelations+'"}');
				predictedRelations.push('{"wrongPredictions":"'+wrongPredictions+'"}');
				predictedRelations.push('{"correct%":"'+numberOfCorrectRelations/predictedRelationsLength +'"}');
				predictedRelations.push('{"numberOfRelations":"'+correctRelations[0].length+'"}');
				predictedRelations.push('{"Time taken":"'+totalTime+'"}');

				res.send( predictedRelations );
			});
		});
	});

}

// Used to find object in object by string
Object.byString = function(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}

// Better performance?
Object.resolve = function(path, obj, safe) {
    return path.split('.').reduce(function(prev, curr) {
        return !safe ? prev[curr] : (prev ? prev[curr] : undefined)
    }, obj || self)
}

// Compute the edit distance between the two given strings
function getLevenshteinDistance(a, b) {
  if(a.length === 0) return b.length; 
  if(b.length === 0) return a.length; 
 
  var matrix = [];
 
  // increment along the first column of each row
  var i;
  for(i = 0; i <= b.length; i++){
    matrix[i] = [i];
  }
 
  // increment each column in the first row
  var j;
  for(j = 0; j <= a.length; j++){
    matrix[0][j] = j;
  }
 
  // Fill in the rest of the matrix
  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a.length; j++){
      if(b.charAt(i-1) == a.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                Math.min(matrix[i][j-1] + 1, // insertion
                                         matrix[i-1][j] + 1)); // deletion
      }
    }
  }
 
  return matrix[b.length][a.length];
};

//////////
// Routes
server.get( '/column/:table_id', getColumn);
server.get( '/database', getDatabases );
server.get( 'row/:table_id', getRow );
server.del( 'row/:row_id', delRow );
server.del( 'rowcontent/:rowcontent_id', delRowcontent );
server.get( 'rowcontent/:table_id', getRowcontent );
server.put( 'rowcontent/:rowcontent_id', putRowcontent );
server.get( '/table/:table_id', getTable );

server.get( '/test/:databaseName/:allowedDistance/:allowSubstring', predictionTest );

//////////////
// Connection
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

