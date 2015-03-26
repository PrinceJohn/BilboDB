import Ember from 'ember';

export default Ember.View.extend({

	didInsertElement: function() {
		this.setTableSorter();
	},

	willInsertElement: function() {

	},

	willClearRender: function() {
	},

	modelChanged: function() {
		//Makes didInsertElement trigger again
		this.rerender();
	}.observes('controller.model'),

	setTableSorter: function() {
		Ember.$('.defaultTable').tablesorter({
		});
	}

});
