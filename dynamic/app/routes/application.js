import Ember from 'ember';

export default Ember.Route.extend({
	///////////////
	// Initialization of the application
	activate: function() {
		Ember.$.expr[":"].contains = Ember.$.expr.createPseudo(function(arg) {
		    return function( elem ) {
		        return Ember.$(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
		    };
		});

		Ember.$.extend({
		    replaceTag: function (currentElem, newTagObj, keepProps) {
		        var $currentElem = Ember.$(currentElem);
		        var $newTag = Ember.$(newTagObj).clone();
		        if (keepProps) {//{{{
		            $newTag = $newTag[0];
		            $newTag.className = currentElem.className;
		            Ember.$.extend($newTag.classList, currentElem.classList);
		            Ember.$.extend($newTag.attributes, currentElem.attributes);
		        }//}}}
		        $currentElem.wrapAll($newTag);
		        $currentElem.contents().unwrap();

		        return this;
		    }
		});
	},

	model: function() {
		//return this.store.find('database');
		return Ember.RSVP.hash({
			database: this.store.find("database")
		});
	}
});
