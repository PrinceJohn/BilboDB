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
			name: 'id (PK)',
			attribute: 'int',
			table: 1
		},

		{
			id: 2,
			name: 'Username',
			attribute: 'string',
			table: 1

		},

		{
			id: 3,
			name: 'Password',
			attribute: 'string',
			table: 1

		},

		{
			id: 4,
			name: 'id (PK)',
			attribute: 'int',
			table: 3
		},

		{
			id: 5,
			name: 'user_id (FK)',
			attribute: 'int',
			table: 3
		},

		{
			id: 6,
			name: 'Filename',
			attribute: 'string'
		}

	]


});
