import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({

	name: 			attr('string'),
	noOfChanges: 	attr('number'),
	relatedTables: 	DS.hasMany('table', {async: true }),
	database:		DS.belongsTo( 'database', { async: true }),
	columns:		DS.hasMany('column', {async: true }),
	rows:			DS.hasMany('row', { async: true })

}).reopenClass({

	FIXTURES: [
		{
			id: 			1,
			name: 			'Teams',
			noOfChanges: 	1,
			database: 1
		},

		{
			id: 			2,
			name: 			'Users',
			noOfChanges: 	null,
			relatedTables: 	[3],
			database: 2,
			column:			[1,2,3]
		},

		{
			id: 			3,
			name: 			'Files',
			noOfChanges: 	14,
			relatedTables: [2],
			database: 2
			
		}

	]

});
