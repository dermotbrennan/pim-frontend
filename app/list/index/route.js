import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('list');
  },
  setupController: function(controller, model) {
    controller.set('lists', model);
  }
});
