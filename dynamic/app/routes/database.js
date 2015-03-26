import Ember from 'ember';

export default Ember.Route.extend({
	activate: function() {

	},

	actions: {
		loading: function() {
			// console.log('Loading database');
			// Return true to bubble this event
			return true;
		},

		error: function( error ) {
			console.log( error.message );
		}
	},

	model: function( params ) {
		return this.store.find("database", params.database_id);
	}
});