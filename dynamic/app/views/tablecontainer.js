import Ember from 'ember';

export default Ember.View.extend({
	tagName: 'div',
	classNames: ['tableContainer'],
	click: function() {
		Ember.$(this.element).toggleClass('marked');
	}
});
