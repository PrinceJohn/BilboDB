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
			val: 'Carl-XIV',
			row: 1

		},

		{

			id: 4,
			val: '2',
			row: 2

		},


		{

			id: 5,
			val: 'Astrid Lindgren',
			row: 2

		},

		{

			id: 6,
			val: 'Karlsson på taket',
			row: 2

		},		

		{

			id: 7,
			val: 'Emil i Lönneberga',
			row: 3

		},		{

			id: 8,
			val: 'Pippi Långstrump',
			row: 3

		}


	]



});
