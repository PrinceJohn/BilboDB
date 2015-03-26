import Ember from 'ember';

export default Ember.View.extend({

	tagName: 'th',
	classNames: ['tableHeadCol'],
	click: function( ) {

		var thisEl = this.element;

		if( $(thisEl).hasClass('active') ) {
			$(thisEl).toggleClass('up');
		}

		$(thisEl).addClass('active');
		$(thisEl).siblings().removeClass('active').removeClass('up');
	
	}
});
