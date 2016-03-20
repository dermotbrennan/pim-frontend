import Ember from 'ember';
// import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

// var itemsNewRoute = Ember.Route.extend(AuthenticatedRouteMixin);
var itemsNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('item', {name: 'mooo'});
  },

  setupController: function(controller, model) {
    // console.log('Model', model);
    // controller.setProperties(model);
    controller.set('model', model);
    // controller.set('breadCrumb', 'New Project');
  }
});

export default itemsNewRoute;
