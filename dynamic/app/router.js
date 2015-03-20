import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    // this.route('about', { path: '/' });
    // this.resource('asidemenu', { path: '/'}, function() {
        
    // });
    // this.route( 'asidemenu', {path: '/'} );
    this.resource( 'application', {path: '/'}, function() {
        this.resource('database', { path: '/:id/:database' }, function() {
            this.resource('table', { path: '/:id/:table'}, function() {
                
            } );
        });
    });

    this.route( 'fourOhFour', {path: "*path" });
    
}); 

export default Router;
