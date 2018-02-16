var TodoApp = TodoApp || {};
import Marionette from 'backbone.marionette';
import ItemView from './components/todo-item';
import TodoCollection from './components/todo-collection';
import TodoController from './components/todo-controller';
import TodoRouter from './components/todo-router';
import TodoLayout from './components/todo-layout';

var TodoApp = Marionette.Application.extend({
    setRootLayout: function () {
        this.root = new TodoLayout();
    }
});

TodoApp.App = new TodoApp();
TodoApp.collection = new TodoCollection();

TodoApp.App.on('before:start', function () {
    TodoApp.App.setRootLayout();
});

TodoApp.App.on('start', function () {
    var controller = new TodoController();
    controller.router = new TodoRouter({
      controller: controller
    });

    // this.showView(new ItemView({
    //     collection: TodoApp.collection
    // }));

    controller.start();
    Backbone.history.start();
});

TodoApp.App.start();
