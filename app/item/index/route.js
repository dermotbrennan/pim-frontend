import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('item');
  },
  setupController: function(controller, model) {
    controller.set('items', model);
  }
});
