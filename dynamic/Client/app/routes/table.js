import Ember from 'ember';
export default Ember.Route.extend({
	activate: function() {
		console.log("Activating table");
	},
	actions: {
		loading: function() {
			// console.log('Loading table...');
			// Return true to bubble this event
			return true;
		},

		error: function() {
			console.log( 'Error loading table');
		},
	},

	model: function(params){
		/*var data =  this.modelFor('database').database + '-database';
		data = data.toLowerCase();
		data = data.replace(/ /g,"-");
		console.log( data );
		return this.store.find( data );*/

		//return this.store.find("table", params.id);
		return Ember.RSVP.hash({
			table: 		this.store.find("table", params.id),
			// column: 	this.store.find("column"),
			// row:		this.store.find("row"),
			// rowcontent: this.store.find('rowcontent')
		});
	},

	setupController: function( controller, modelHash ) {
		controller.set('model', modelHash );
		controller.set( 'table', modelHash.table );
		controller.set( 'column', modelHash.column );
		controller.set( 'row', modelHash.row );
		controller.set( 'rowcontent', modelHash.rowcontent );
	},

	afterModel: function() {
	}

});
