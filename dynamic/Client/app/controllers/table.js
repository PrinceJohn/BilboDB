import Ember from 'ember';

export default Ember.Controller.extend({

	// Controller properties
	markedTable: null,
	markedTableId: null,
	linkTables: false,
	showStructure: false,
	itemController: 'singletable',
	
	// Controller values
	columnAttributes: ['int', 'double', 'date', 'timestamp', 'string'],
	rowsLimit: ['25', '50', '100', '250', '500' ],

	// Function for getting table and related tables
	combinedTables: function() {
		var table = this.table;
		var	relatedTables = this.model.table.get('relatedTables').filterBy('name'),
			combined = [];

		combined.pushObject(table);
		combined.pushObjects(relatedTables);

		return combined;
	}.property('this.model.table.@each.relatedTables', 'this.model.table.@each'),

	// Singular or plural words in actionbar
	inflection: function () {
		var markedRows = this.get('markedRows');
		return markedRows === 1 ? 'rad markerad' : 'rader markerade';
	}.property('markedRows'),

	limitedRows: function() {
		console.log(this.get('content'));
		// Works, but needs to return the correct row for each table
		return this.get('this.row').get('content').slice(0,1);
	}.property('this.row.@each'),

	// Returns how many rows that are marked
	markedRows: function() {
		var rowModel = this.get('this.model.row');
		var len = this.model.table.get('rows').filterBy('isMarked', true ).get('length');
		return len;
	}.property('this.model.row.@each.isMarked'),



	actions: {

		//On blur editing table data
		acceptEdit: function() {

			var  test = this.get('table').get('rows'),
				 rowcontent = [];
			
			test.forEach( function( row ) {
				row.get('rowcontents').forEach( function( rowcontents ) {
					if( rowcontents.get('isEditing') === true ) {
						rowcontents.set('isEditing', false );
						rowcontents.save();
					}
				});
			});

			Ember.$('.dataEdit').removeClass('.dataEdit');
			
		},

		// Start editing table data
		editTableData: function( params ) {

			var  test = this.get('table').get('rows'),
				 rowcontent = [];
			
			test.forEach( function( row ) {
				row.get('rowcontents').forEach( function( rowcontents ) {
					if( rowcontents.id === params ) {
						rowcontents.set('isEditing', true );
					}
				});
			});

			Ember.$('.dataEdit').focus();
		},

		editAttribute: function() {
			this.get('this.column').save();
		},

		// Adds a row
		addRow: function( params ) {
			var table = this.table,
				relatedTables = this.model.table.get('relatedTables').filterBy('name'),
				combined = [],
				row = this.store.createRecord('row');

			// Find the correct table for which to insert the data
			combined.pushObject(table);
			combined.pushObjects(relatedTables);
			combined.forEach( function( item ) {
				if( item.id === params ) {
					table = item;
				}
			});

			// Check how many columns the table has
			var columnsLength = table.get('columns').get('length');

			// Insert the data
			var edit = false;

			for( var x = 0 ; x < columnsLength ; x++ ) {

				if( x === 0 ) {
					edit = true;
				} else {
					edit = false;
				}
					
				row.get('rowcontents').addObject( 
					this.store.createRecord( 'rowcontent', {
						val: 'new',
						isEditing: edit
					})
				);
			}

			table.get('rows').addObject(row);
		},

		// Marks/unmarks all rows in the selected table
		markRows: function( tableId, checked ) {

			var tables = this.get('combinedTables'),
				currentTable;
			
			tables.forEach( function(item) {
				if( item.id === tableId ) {
					currentTable = item;
				}
			});

			currentTable.get('rows').setEach('isMarked', checked );

		},

		// Removes rows that are marked
		removeRow: function( ) {
			var markedRows = this.model.table.get('rows').filterBy('isMarked', true);
			markedRows.invoke('destroyRecord');

			// // Uncheck the marked table
			// if( this.get('markedTableId') !== "undefined" ) {
			// 	console.log('hej');
			// 	Ember.$('checkbox[name='+this.get('markedTableId')+']').attr('checked', false );
			// }
		},

		// Marks a given table so we know which table to add rows into
		markTable: function( name, id ) {
			Ember.$('.tableContainer').siblings().removeClass('marked');
			Ember.$("div[name="+name+"]").addClass('marked');
			this.set('markedTable', name);
			this.set('markedTableId', id);
		},

		toggleChain: function() {
			Ember.$('#chain').toggleClass('active');
			if( this.get('linkTables') ) {
				this.set('linkTables', false);
			} else {
				this.set('linkTables', true );
			}
		},

		toggleStructure: function() {
			Ember.$('#structure').toggleClass('active');
			if( this.get('showStructure') ) {
				this.set('showStructure', false);
			} else {
				this.set('showStructure', true );
			}
		}
	}
});
