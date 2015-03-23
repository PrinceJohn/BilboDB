import Ember from 'ember';

export default Ember.View.extend({
	tagName: 'li',
	classNames: ['asideListItem', 'child' ],
	attributeBindings: ['data-filter'],
	click: function( ) {
		this.$('.listItemChanges').addClass('clear');
		Ember.$(this.element).children('.listItemChanges').addClass('clear');
	}
});