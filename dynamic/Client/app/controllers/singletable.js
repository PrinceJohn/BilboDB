import Ember from 'ember';

export default Ember.Controller.extend({
	// Prints out sorted rows
	sortedRows: function() {

		var columnId = this.model.get('sortBy'),
			columnIndex,
			splitId;

		this.model.get('columns').forEach( function( item, index ) {
			splitId = (item.id).split('-')[3];

			if (!columnId &&index===0) {
				columnId = splitId;
			}

			 if( splitId === columnId ) {
			 	columnIndex = index;
			 	return;
			 }
		});

		var sorted = [];

		this.model.get('rows').slice(0, this.get('target').get('selectedRowLimit') ).forEach( function( item ) {
			sorted.push( item );
		});

		sorted.sort( function( a, b ) {

			var aData, bData;

			a.get('rowcontents').forEach(function(rowcontent, i) {
				if (columnIndex === i) {
					aData = rowcontent;
					return;
				}

			});

			b.get('rowcontents').forEach(function(rowcontent, i) {
				if (columnIndex === i) {
					bData = rowcontent;
					return;
				}

			});

			if( aData !== undefined || bData !== undefined ) {
				if(aData.get('val') < bData.get('val') ) { return -1; }
				if(aData.get('val') > bData.get('val') ) { return 1; }
			} else {
				return 0;
			}

			//var aData = a.get('rowcontents')[columnIndex].get('val');
			//console.log(aData);
			//a.get('rowcontents')[columnIndex] - b.get('rowcontents')[columnIndex];
		});

		return this.model.get('sortAscending') ? sorted.reverse() : sorted ;

	}.property('this.model.rows.@each', 'this.model.sortBy', 'this.model.sortAscending', 'this.target.selectedRowLimit'),

	actions: {

		// Sort the table
		sortBy: function(params) {
			var splitId = params.split('-')[3];

			this.model.set('sortBy', splitId);
			this.model.set('sortAscending', this.model.get('sortBy') === splitId ? !this.model.get('sortAscending') : this.model.get('sortAscending') );
			
			// this.set('sortProperties', ['id']);
			// this.set('sortAscending', !this.get('sortAscending'));
		},

		limitRows: function() {
			console.log('Tjenare');
		}
	}
});
