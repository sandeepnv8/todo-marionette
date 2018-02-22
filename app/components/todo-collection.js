import Backbone from 'backbone';
import TodoModel from './todo-model';

export default Backbone.Collection.extend({
    model: TodoModel,
    comparator: 'created',
    initialize: function(attrs, options) {
        //console.log("**inCollection", attrs, options);
    },
    getCompleted: function() {
        return this.filter(this.isCompleted);
    },
    getActive: function() {
        return this.reject(this.isCompleted);
    },
    isCompleted: function(todo) {
        return todo.isCompleted();
    }
});
