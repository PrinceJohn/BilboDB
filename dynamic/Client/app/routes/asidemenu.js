import Ember from 'ember';

export default Ember.Route.extend({
	activate: function() {
		alert('entering...');
	},

	actions: {
		test: function() {
			alert('hej');
		}
	}
});