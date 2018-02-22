var TodoApp = TodoApp || {};
import Marionette from 'backbone.marionette';
import TodoCollection from './components/todo-collection';
import TodoController from './components/todo-controller';
import TodoRouter from './components/todo-router';
import TodoLayout from './components/todo-layout';

TodoApp = Marionette.Application.extend({
    setRootLayout: function () {
        this.root = new TodoLayout();
    }
});

TodoApp.App = new TodoApp();

TodoApp.App.on('before:start', function () {
    TodoApp.App.setRootLayout();
});

module.exports =  TodoApp;
