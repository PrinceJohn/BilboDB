import Ember from 'ember';

export default Ember.Route.extend({
	activate: function() {
	},

	actions: {
		test: function() {
		}
	},

	model: function() {
		return this.store.find('database');
	}
});