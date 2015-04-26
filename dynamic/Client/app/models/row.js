import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({

	isMarked:		attr('boolean', {defaultValue: false}),
	rowcontents: 	DS.hasMany('rowcontent', {async: true} ),
	table:			DS.belongsTo('table', {async: true} ) 

}).reopenClass({

	FIXTURES: [

		{
			id: 1,
			rowcontents: [1,2,3],
			table: 2
		},

		{
			id: 2,
			rowcontents: [4, 5, 6],
			table: 2
		},		

		{
			id: 3,
			rowcontents: [7, 8],
			table: 3
		},

		{
			id: 4,
			rowcontents: [9, 10, 11],
			table: 2
		}

	]


});
