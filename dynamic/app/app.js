import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
// import EmberHelperEachIndexed from './helpers/each-indexed';
import EmberHelperDataTextArea from './views/data-textarea';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
	modulePrefix: config.modulePrefix,
	podModulePrefix: config.podModulePrefix,
	Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);
// Ember.Handlebars.registerHelper('eachIndexed', EmberHelperEachIndexed);
Ember.Handlebars.helper('data-textarea', EmberHelperDataTextArea);

export default App;
