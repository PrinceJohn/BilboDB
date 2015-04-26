import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	extractArray: function(store, type, payload) {
        payload = {
            'database': payload
        };
        console.log('Database serialize');
        return this._super(store, type, payload);       
    }
});
