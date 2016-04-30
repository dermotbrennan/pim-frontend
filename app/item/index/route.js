import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var list = this.modelFor('item');
    return this.store.query('item', {list_id: list.id});
  },
  setupController: function(controller, model) {
    controller.set('items', model);
  }
});
