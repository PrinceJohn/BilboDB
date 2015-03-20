import Ember from 'ember';

export default Ember.Route.extend({
	activate: function() {

	},

	actions: {
		loading: function(transition, originRoute) {
			console.log('Loading database');
			// Return true to bubble this event
			return true;
		},

		error: function() {
			console.log('Error database');
		}
	},

	model: function( params ) {
		return this.store.find("database", params.id);
	}
});