import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({

	isMarked:		attr('boolean'),
	rowcontents: 	DS.hasMany('rowcontent', {async: true} ),
	table:			DS.belongsTo('table', {async: true} ) 

}).reopenClass({

	FIXTURES: [

		{
			id: 1,
			isMarked: true,
			rowcontents: [1,2,3],
			table: 2
		},

		{
			id: 2,
			isMarked: false,
			rowcontents: [4, 5, 6],
			table: 2
		}

	]


});
