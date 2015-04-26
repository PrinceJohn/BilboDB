import Ember from 'ember';

export default Ember.View.extend({
	click: function() {
		var test = Ember.$(this.element).parent().parent();
		if( test.hasClass('expanded') ) {
			test.removeClass('expanded');
			test.addClass('colapsed');
			// test.children('.parent').children('.asideList').css('display', 'none');
			test.children('.parent').children('.asideList').hide( 200 );
		} else {
			test.removeClass('colapsed');
			test.addClass('expanded');
			// test.children('.parent').children('.asideList').css('display', 'block');
			test.children('.parent').children('.asideList').show( 200 );
		}
	}
});
