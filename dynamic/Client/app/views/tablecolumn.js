import Ember from 'ember';

export default Ember.View.extend({

	tagName: 'th',
	classNames: ['tableHeadCol'],
	click: function( ) {

		var thisEl = this.element;

		if( Ember.$(thisEl).hasClass('active') ) {
			Ember.$(thisEl).toggleClass('up');
		}

		Ember.$(thisEl).addClass('active');
		Ember.$(thisEl).siblings().removeClass('active').removeClass('up');
	
	}
});
