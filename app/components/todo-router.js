import Marionette from 'backbone.marionette';

export default Marionette.AppRouter.extend({
      appRoutes: {
          '*filter': 'filterItems'
      }
});
