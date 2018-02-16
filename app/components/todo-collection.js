import Backbone from 'backbone';
import TodoModel from './todo-model';

export default Backbone.Collection.extend({
    model: TodoModel,
    comparator: 'created',
    initialize: function(attrs, options) {
        //console.log("**inCollection", attrs, options);
    }
});
