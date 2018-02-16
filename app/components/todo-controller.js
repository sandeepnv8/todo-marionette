import Marionette from 'backbone.marionette';
import $ from 'jquery';
import TodoLayout from './todo-layout';
import TodoCollection from './todo-collection';
import TodoItem from './todo-item';
import TodoCollectionView from './todo-collection-view';

const filterChannel = Backbone.Radio.channel('filter');
export default Marionette.Object.extend({
    initialize: function() {
        this.todoList = new TodoCollection();
        this.layout = new TodoLayout();
    },
    start: function() {
        this.showTodoHeader();
        if(this.todoList.models.length){
            this.showListView();
        }
        this.todoList.on('all', this.showListView, this);
        this.todoList.fetch();
    },
    showTodoHeader: function() {
        var headerView = new TodoItem({
            collection: this.todoList
        });
        this.layout.showChildView('header', headerView);
    },
    showListView: function() {
        var todoListView = new TodoCollectionView({
            collection: this.todoList
        });
        todoListView.render();
        this.layout.showChildView('main', todoListView);
    },
    filterItems: function (filter) {
        var newFilter = filter && filter.trim() || 'all';
        filterChannel.request('filterState').set('filter', newFilter);
    }
});
