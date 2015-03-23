import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

    this.resource( 'application', {path: '/'}, function() {
        this.resource('database', { path: '/:database/:database_id' }, function() {
            this.resource('table', { path: '/:table/:id'}, function() {
                
            } );
        });
    });

    // this.route( 'fourOhFour', {path: "*path" });
    
}); 

export default Router;
