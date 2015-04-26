import Ember from 'ember';

export default Ember.View.extend({

	didInsertElement: function() {
		this.setTableSorter();
		this.checkMarkedRows();
	},

	willDestroyElement: function() {
		Ember.$('#headerBorder').removeClass('active');
	},

	modelChanged: function() {
		//Makes didInsertElement trigger again
	}.observes('controller.model'),

	setTableSorter: function() {
		// Ember.$('.defaultTable').tablesorter({
		// });
	},

	checkMarkedRows: function() {
		Ember.$('#actionBar').addClass('active');
		Ember.$('#headerBorder').addClass('active');
		Ember.$('#contentWrapper').addClass('morePadding');
	}

});