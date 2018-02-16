import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import TodoListView from './todo-listview';
var filterChannel = Backbone.Radio.channel('filter');

export default Marionette.CollectionView.extend({
    tagName: 'ul',
    id: 'todo-list',
    childView:TodoListView
});
