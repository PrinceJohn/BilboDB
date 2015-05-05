import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({

	name: 			attr('string'),
	attribute: 		attr('string'),
	table:			DS.belongsTo('table', { async: true }),
	isPrimaryKey:	attr('boolean', { defaultValue: false }),
	isForeignKey:	attr('boolean', { defaultValue: false })

}).reopenClass({

	FIXTURES: [

		{
			id: 1,
			name: 'id',
			attribute: 'int',
			table: 2
		},

		{
			id: 2,
			name: 'Username',
			attribute: 'string',
			table: 2

		},

		{
			id: 3,
			name: 'Password',
			attribute: 'string',
			table: 2

		},

		{
			id: 4,
			name: 'id',
			attribute: 'int',
			table: 3
		},

		{
			id: 5,
			name: 'Filename',
			attribute: 'string'
		}

	]


});
