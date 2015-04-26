import Ember from 'ember';
import HeaderController from '../controllers/header';

export default Ember.View.extend({
	templateName: 'header',
	headerTitle: 'hejsan',
	init: function() {
		this._super();
		this.set("controller", HeaderController.create() );
	}
});
