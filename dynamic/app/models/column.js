import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({

	name: 		attr('string'),
	dataType: 	attr('string'),
	table:		DS.belongsTo('table', {async: true})

}).reopenClass({

	FIXTURES: [

		{
			id: 1,
			name: 'id',
			dataType: 'int',
			table: 2

		},

		{
			id: 2,
			name: 'Username',
			dataType: 'string',
			table: 2

		},

		{
			id: 3,
			name: 'Password',
			dataType: 'string',
			table: 2

		},

		{
			id: 4,
			name: 'id',
			dataType: 'int',
			table: 3
		}

	]


});
