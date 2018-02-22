import Marionette from 'backbone.marionette';
import TodoListItem from '../templates/todo-listitem.hbs';

export default Marionette.View.extend({
    tagName: 'li',
    template:TodoListItem,
    ui: {
        edit: '.edit',
        destroy: '.destroy',
        label: 'label',
        toggle: '.toggle'
    },
    events: {
        'click @ui.destroy': 'deleteModel',
        'dblclick @ui.label': 'onEditClick',
        'keydown @ui.edit': 'onEditKeypress',
        'focusout @ui.edit': 'onEditFocusout',
        'click @ui.toggle': 'toggle'
    },
    initialize: function() {
        //console.log("***");
    },
    className: function () {
        return this.model.get('completed') ? 'completed' : 'active';
    },
    modelEvents: {
      change: 'render'
    },
    deleteModel: function() {
        this.model.destroy();
    },
    toggle: function() {
        this.model.toggle().save();
    },
    onEditClick: function () {
        this.$el.addClass('editing');
        this.ui.edit.focus();
        this.ui.edit.val(this.ui.edit.val());
    },
    onEditFocusout: function () {
        var todoText = this.ui.edit.val().trim();
        if (!todoText) {
            this.destroy();
            return;
        }
        this.model.set('title', todoText).save();
        this.$el.removeClass('editing');
    },
    onEditKeypress: function (e) {
        var ENTER_KEY = 13;
        var ESC_KEY = 27;

        if (e.which === ENTER_KEY) {
          this.onEditFocusout();
          return;
        }

        if (e.which === ESC_KEY) {
            this.ui.edit.val(this.model.get('title'));
            this.$el.removeClass('editing');
        }
    }
});
