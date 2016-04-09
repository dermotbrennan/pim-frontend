import Ember from 'ember';
// import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

// var itemsNewRoute = Ember.Route.extend(AuthenticatedRouteMixin);
var itemsNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('item');
  },

  setupController: function(controller, model) {
    // console.log('Model', model);
    // controller.setProperties(model);
    controller.set('model', model);
    // controller.set('breadCrumb', 'New Project');
  },

  actions: {
    willTransition(transition) {
      var model = this.controller.get('model');
      if (model.get('hasDirtyAttributes')) {
        if (confirm('Are you sure you want to abandon progress?')) {
          model.deleteRecord();
          return true;
        } else {
          transition.abort();
        }
      } else {
        // Bubble the `willTransition` action so that
        // parent routes can decide whether or not to abort.
        return true;
      }
    }
  }
});

export default itemsNewRoute;
