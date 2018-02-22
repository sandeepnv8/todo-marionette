import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import TodoActionsTmpl from '../templates/todo-actions.hbs';

const filterChannel = Backbone.Radio.channel('filter');


export default Marionette.View.extend({
    template: TodoActionsTmpl,
    ui: {
        filters: '#filters a'
    },
    events: {
        'click @ui.filters': 'updateRouter'
    },
    initialize: function() {
        this.listenTo(filterChannel.request('filterState'), 'change:filter', this.updateFilterSelection, this);
    },
    onRender: function() {
        this.$el.parent().toggle(this.collection.length > 0);
        this.updateFilterSelection();
    },
    updateFilterSelection: function() {
        this.ui.filters.removeClass('selected');
    },
    updateRouter: function() {
        Backbone.history.navigate();
    }
});
