import DS from 'ember-data';
var attr = DS.attr;


export default DS.Model.extend({

	val: attr('string'),
	row: DS.belongsTo('row', {async: true }),
	isEditing: attr('boolean', {defaultValue: false})

}).reopenClass({


	FIXTURES: [

		{

			id: 1,
			val: '5',
			row: 1

		},


		{

			id: 2,
			val: 'erma1007',
			row: 1

		},

		{

			id: 3,
			val: 'abc123',
			row: 1

		},

		{

			id: 4,
			val: '2',
			row: 2

		},


		{

			id: 5,
			val: 'sefo1401',
			row: 2

		},

		{

			id: 6,
			val: 'trustno1',
			row: 2

		},		

		{

			id: 7,
			val: '1',
			row: 3

		},		{

			id: 8,
			val: 'sommar.jpg',
			row: 3

		},

		{
			id: 9,
			val: '3',
			row: 4
		},

		{
			id: 10,
			val: 'gaho1000',
			row: 4
		},

		{
			id: 11,
			val: 'hots123',
			row: 4
		}


	]



});
