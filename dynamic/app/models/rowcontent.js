import DS from 'ember-data';
var attr = DS.attr;


export default DS.Model.extend({

	val: attr('string'),
	row: DS.belongsTo('row', {async: true })


}).reopenClass({


	FIXTURES: [

		{

			id: 1,
			val: '1',
			row: 1

		},


		{

			id: 2,
			val: 'Karl-Gustav',
			row: 1

		},

		{

			id: 3,
			val: 'Knugen',
			row: 1

		},

		{

			id: 4,
			val: '2',
			row: 2

		},


		{

			id: 5,
			val: 'Kalle B',
			row: 2

		},

		{

			id: 6,
			val: 'Knugen-kungen',
			row: 2

		}


	]



});
