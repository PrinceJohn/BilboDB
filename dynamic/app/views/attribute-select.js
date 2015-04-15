import Ember from 'ember';

export default Ember.Select.extend({

	// If we change an attribute, save the model
	change: function() {
		this.get('controller').send('editAttribute', '');
	}


});
