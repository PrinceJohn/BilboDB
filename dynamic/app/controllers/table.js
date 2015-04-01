import Ember from 'ember';

export default Ember.Controller.extend({
	tableTemplate: true,
	viewRows: 0,
	tableSorter: false,

	// Function for getting table and related tables
	combinedTables: function() {
		var table = this.table;
		var	relatedTables = this.model.table.get('relatedTables').filterBy('name'),
			combined = [];

		combined.pushObject(table);
		combined.pushObjects(relatedTables);

		console.log( combined );
		return combined;
	}.property('this.model.table.@each.relatedTables', 'this.model.table.@each'),

	// Returns how many rows that are marked
	markedRows: function() {
		var rowModel = this.get('this.model.row');
		var len = rowModel.filterBy('isMarked', true ).get('length');
		this.viewRows = len;
		return len;
	}.property('this.model.row.@each.isMarked'),

	// Singular or plural words in actionbar
	inflection: function () {
		var markedRows = this.get('markedRows');
		return markedRows === 1 ? 'rad markerad' : 'rader markerade';
	}.property('markedRows'),

	// Toggle actionbar
	actionBar: function() {
		Ember.$('#actionBar').addClass('active');
		Ember.$('#headerBorder').addClass('active');
		Ember.$('#contentWrapper').addClass('morePadding');
	},

	// Prints out sorted rows
	sortedRows: function() {
		var arr = this.get('this.table.rows').getEach('rowcontents');
		console.log( arr );
		return arr;

	}.property('this.model.table.rows.@each', 'this.model.rowcontent.@each'),

	actions: {
		// Removes rows that are marked
		removeRow: function() {
			console.log( Ember.$("table").trigger("update") );
			var markedRows = this.model.row.filterBy('isMarked', true);
			markedRows.invoke('destroyRecord');
		},

		// Sort the table
		sortBy: function(params) {
			console.log( params);


			// this.set('sortProperties', ['id']);
			// this.set('sortAscending', !this.get('sortAscending'));
		},

		editTableData: function( params ) {
			var data = this.get( 'this.rowcontent' ).filterBy( 'id', params );
			data[0].set('isEditing', true );
			Ember.$('.dataEdit').focus();
		},

		acceptEdit: function() {
			this.get('this.rowcontent').save();
			var edit = this.get( 'this.rowcontent' ).filterBy( 'isEditing', true );
			
			edit[0].set('isEditing', false );
		}
	}
});
