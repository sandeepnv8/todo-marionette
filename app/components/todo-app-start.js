import { history } from 'backbone';
import TodoApp from '../index.js';
import TodoController from './todo-controller';
import TodoRouter from './todo-router';

TodoApp.App.on('start', function () {
    const todoController = new TodoController();
    const router = new TodoRouter();
    TodoApp.App.router = new TodoRouter({
        app: this,
        controller: todoController
    });

    todoController.start();
    history.start({pushState: true});
});

TodoApp.App.start();
