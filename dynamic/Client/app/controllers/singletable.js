import Ember from 'ember';


export default Ember.Controller.extend({

	sorted: [],
	markedRows: 0,
	filterValues: [],

	// Prints out sorted rows
	sortedRows: function() {

		var marked 			= this.model.get('rows').filterBy('isMarked', true).get('length'),
			row 			= this.model.get('rows').filterBy('isMarked', true),
			sorted 			= [],
			that 			= this,
			indexes 		= [],
			filterValues 	= this.get('filterValues');

		// If we have marked a row and "linked" the tables, filter them
		if( ( marked > 0 ) ) {
			// Find which indexes that are primary and foreign
			var column = this.model.get('columns').filter( function( col ) {
				if( col.get('isPrimaryKey') === true || col.get('isForeignKey') === true ) {
					indexes.push( col.id.split('-')[3] );
					return col;
				}
			});
			row[0].get('rowcontents').some( function( rowcontent, index ) {
				if( indexes.indexOf( String(index) ) > -1 ) {
					that.get('filterValues').push( rowcontent.get('val') );
					return true;
				}
			});

		} else if ( marked < 1 ) {
			this.get('filterValues').length = 0;
		}

		this.model.get('rows').slice(0, this.get('target').get('selectedRowLimit') ).filter( function( row ) {
			if( !filterValues.length ) {
				sorted.push(row);
			} else {
				row.get('rowcontents').some( function( rowcontent ) {
					if( filterValues.indexOf( rowcontent.get('val') ) > -1 ) {
						console.log(filterValues);
						console.log(rowcontent.get('val'));
						sorted.push(row);
						return row;
					}
				})
			}
		});

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

	}.property('this.model.rows.@each', 'this.model.rows.@each.isMarked', 'this.model.sortBy', 'this.model.sortAscending', 'this.target.selectedRowLimit', 'this.target.filterValues'),

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
