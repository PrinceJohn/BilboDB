import Ember from 'ember';

export default Ember.View.extend({
	// templateName: 'asidemenu',
	// init: function() {
	// 	this._super();
	// 	this.set("controller", AsideMenuController.create() );
	// },

	didInsertElement: function() {
		// Hide table items
		var parent = Ember.$(".parent");
		parent.children('.asideList').hide();

		Ember.$('.parentC').each(function() {
			if( Ember.$(this).hasClass('active') ) {
				Ember.$(this).parent().parent().parent().addClass('expanded');
				Ember.$(this).parent().parent().children('.asideList').show();
			}
		});
	}

});
