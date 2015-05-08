import Ember from 'ember';

export default Ember.Controller.extend({

	searchFilter: '',

	searchFilterChanged: function(){ 
		var tableRows = Ember.$('.child').find('.listItemName');

		if( this.searchFilter === "" ) {
			tableRows.parent().parent().show();
		} else {
			tableRows.filter( ':not(:contains('+ this.searchFilter + '))' ).parent().parent().css('display', 'none');
			tableRows.filter( ':contains('+ this.searchFilter + ')' ).parent().parent().css('display', 'block');
		}

		

	}.observes( 'searchFilter'),
	
	actions: {
		tableSearch: function() {
			var input = Ember.$('#asideSearchInput').val();
			var tableRows = Ember.$('.child').find('.listItemName');

			console.log( tableRows.parent().parent() );
			if( input === "" ) {
				tableRows.parent().parent().show();
			} else {
				tableRows.filter( ':not(:contains('+ input + '))' ).parent().parent().css('display', 'none');
				tableRows.filter( ':contains('+ input + ')' ).parent().parent().css('display', 'block');
			}
		},

		showDialog: function() {
			Ember.$('#dialog').addClass('active');
		},

		close: function() {
			Ember.$('#innerWrapper').removeClass('slide');
		}
	}
});
