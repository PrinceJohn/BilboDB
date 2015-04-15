import Ember from 'ember';

export default Ember.Controller.extend({
	// Prints out sorted rows
	sortedRows: function() {
		var columnId = this.model.get('sortBy'),
			columnIndex;

		this.model.get('columns').forEach( function( item, index ) {
			 if( item.id == columnId ) {
			 	columnIndex = index;
			 	return;
			 }
		});

		var sorted = [];

		this.model.get('rows').forEach( function( item ) {
			sorted.push( item );
		});

		sorted.sort( function( a, b ) {
			a.get('rowcontents')[columnIndex] - b.get('rowcontents')[columnIndex];
		});

		// var arr = this.get('this.table.rows').getEach('rowcontents');
		// console.log( arr );

		// var arr = this.get('this.rowcontent').sortBy('val');

		return this.model.get('sortAscending') ? sorted.reverse() : sorted ;

	}.property('this.model.rows.@each', 'this.model.sortBy', 'this.model.sortAscending'),

	actions: {

		// Sort the table
		sortBy: function(params) {
			console.log( params);
			this.model.set('sortBy', params);
			this.model.set('sortAscending', this.model.get('sortBy') === params ? !this.model.get('sortAscending') : this.model.get('sortAscending') );
			
			// this.set('sortProperties', ['id']);
			// this.set('sortAscending', !this.get('sortAscending'));
		}
	}
});
