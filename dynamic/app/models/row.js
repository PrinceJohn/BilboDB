import DS from 'ember-data';
// var attr = DS.attr;

export default DS.Model.extend({

	rowcontents: 	DS.hasMany('rowcontent', {async: true} ),
	table:			DS.belongsTo('table', {async: true} ) 

}).reopenClass({

	FIXTURES: [

		{
			id: 1,
			rowdatas: [1,2,3],
			table: 2
		},

		{
			id: 2,
			rowDatas: [4, 5, 6],
			table: 3
		}

	]


});
