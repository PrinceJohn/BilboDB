import Ember from 'ember';

export default Ember.Controller.extend({
	headerTitle: 'BilboDB',
	menuSlide: true,
	crossEdit: true,

	actions: {
		toggleSearch: function( ) {
			Ember.$('#search').toggleClass('active').parent().toggleClass( 'active' );
		},

		toggleMenu: function() {
			Ember.$('#innerWrapper').toggleClass('slide');
			Ember.$('#menu').toggleClass('active');
		},

		headerSearch: function() {
			var input = Ember.$('#searchInput').val();
			var tableRows = Ember.$('tbody').find('span');

			if( input === "" ) {
				tableRows.parent().parent().css('display', 'table-row');
			} else {
				tableRows.filter( ':not(:contains('+ input + '))' ).parent().parent().css('display', 'none');
				tableRows.filter( ':contains('+ input + ')' ).parent().parent().css('display', 'table-row');
			}
		}
	}
});
