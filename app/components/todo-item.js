import Marionette from 'backbone.marionette';
import TodoItem from '../templates/todo-item.hbs';

export default Marionette.View.extend({
    template: TodoItem,
    ui: {
        input: '#new-todo'
    },
    events: {
      'keypress @ui.input': 'onInputKeypress',
      'keyup @ui.input': 'onInputKeyup'
    },
    intialize: function () {
        console.log("***Init");
        //this.listenTo(this.model, "change", this.addTodoItemView);
    },
    onInputKeyup: function (e) {
        var ESC_KEY = 27;

        if (e.which === ESC_KEY) {
            this.render();
        }
    },
    onInputKeypress: function (e) {
        var ENTER_KEY = 13;
        var todoText = this.ui.input.val().trim();

        if (e.which === ENTER_KEY && todoText) {
            this.collection.create({
                title: todoText
            });
            this.ui.input.val('');
        }
    }
});
