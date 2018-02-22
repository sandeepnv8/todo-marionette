import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import TodoController from './todo-controller';
import TodoCollection from './todo-collection';
const controller = new TodoController();

export default Marionette.AppRouter.extend({
          controller: controller,
          appRoutes: {
              '*filter': 'filterItems'
          },
          showActive: function() {
              console.log("*showActive");
          },
          onRoute: function(name, path, args) {
              console.log('User navigated to ' + path);
          },
          initialize: function() {
              //this.controller = new TodoController({collection: collection});
          }
});
