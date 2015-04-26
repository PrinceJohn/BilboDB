import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		closeDialog: function() {
			Ember.$('#dialog').removeClass('active');
		}
	}

});
