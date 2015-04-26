import Ember from 'ember';

export default Ember.Checkbox.extend({

	click: function() {
		this.get('controller').send('markRows', this.get('name'), this.get('checked') );
	}

});
