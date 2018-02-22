import Marionette from 'backbone.marionette';

export default Marionette.View.extend({
    el: '#app',
    regions: {
        header: '#todo-header',
        main: '#todo-main',
        actions: '#todo-actions'
    }
});
