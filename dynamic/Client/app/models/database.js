import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({

	name: 	attr('string'),
	table: DS.hasMany( 'table', {async: true} ) 

}).reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: 'Dewire DB',
			table: [1]
		},

		{
			id: 2,
			name: 'Telia',
			table: [2,3]

		}
	]
});
