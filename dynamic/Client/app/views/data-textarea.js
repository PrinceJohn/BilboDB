import Ember from 'ember';

export default Ember.TextArea.extend({
	didInsertElement: function() {
		this.$().focus();
	},

	classNames: ['dataEdit']
});

// Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);