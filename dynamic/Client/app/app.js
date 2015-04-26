import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
// import EmberHelperEachIndexed from './helpers/each-indexed';
import EmberHelperDataTextArea from './views/data-textarea';
import EmberHelperTableCheckbox from './views/table-checkbox';
import EmberHelperAttributeSelect from './views/attribute-select';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
	modulePrefix: config.modulePrefix,
	podModulePrefix: config.podModulePrefix,
	Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);
// Ember.Handlebars.registerHelper('eachIndexed', EmberHelperEachIndexed);

// Custom helpers
Ember.Handlebars.helper( 'data-textarea', EmberHelperDataTextArea );
Ember.Handlebars.helper( 'table-checkbox', EmberHelperTableCheckbox );
Ember.Handlebars.helper( 'attribute-select', EmberHelperAttributeSelect );

export default App;
