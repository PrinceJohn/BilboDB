import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	extractArray: function(store, type, payload) {
        console.log('table serialize');
        return this._super(store, type, payload);       
    }
});
