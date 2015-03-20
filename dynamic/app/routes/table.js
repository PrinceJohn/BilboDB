import Ember from 'ember';

export default Ember.Route.extend({
	activate: function() {
		
	},
	actions: {
		loading: function(transition, originRoute) {
			console.log('Loading table...');

			// Return true to bubble this event
			return true;
		},
		error: function() {
			console.log( 'Error loading table');
		}
	},

	model: function(params){
		/*var data =  this.modelFor('database').database + '-database';
		data = data.toLowerCase();
		data = data.replace(/ /g,"-");
		console.log( data );
		return this.store.find( data );*/
		return this.store.find("table", params.id);
	}

});
