import Marionette from 'backbone.marionette';
import Backbone from 'backbone';
import TodoCollectionTmpl from '../templates/todo-collection-view.hbs';
import TodoCollectionBody from './todo-collection-body';


var filterChannel = Backbone.Radio.channel('filter');

export default Marionette.View.extend({
    template:TodoCollectionTmpl,
    regions: {
        listBody : {
            el: 'ul',
            replacement: true
        }
    },
    ui: {
        toggle: '#toggle-all'
    },
    events: {
        'click @ui.toggle': 'onToggleClick'
    },
    collectionEvents: {
        'change:completed': 'render',
        all: 'setCheckAllState'
    },
    initialize: function() {
        this.listenTo(filterChannel.request('filterState'), 'change:filter', this.render, this);
    },
    onToggleClick: function() {

    },
    setCheckAllState: function() {
        //console.log("setCheckAllState");
    },
    onRender: function() {
        var collectionBodyView = new TodoCollectionBody({collection: this.collection});
        this.showChildView('listBody', collectionBodyView);
    }
});
