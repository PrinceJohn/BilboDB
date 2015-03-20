import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({

	name: 			attr('string'),
	noOfChanges: 	attr('number'),
	relatedTables: 	DS.hasMany('table', {async: true }),
	database:		DS.belongsTo( 'database', { async: true })

}).reopenClass({

	FIXTURES: [
		{
			id: 			1,
			name: 			'Teams',
			noOfChanges: 	1
		},

		{
			id: 			2,
			name: 			'Users',
			noOfChanges: 	null,
			relatedTables: [3]
		},

		{
			id: 			3,
			name: 			'Files',
			noOfChanges: 	14,
			relatedTables: [2]
			
		}

	]

});
