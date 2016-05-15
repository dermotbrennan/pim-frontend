import Authenticated from '../../routes/authenticated';

export default Authenticated.extend({
  model: function() {
    var list = this.modelFor('item');
    return this.store.query('item', {list_id: list.id});
  },
  setupController: function(controller, model) {
    controller.set('items', model);
  },
  setupCrumbs() {
    var list = this.modelFor('item');
    var crumbs = [
      {name: "My Lists", path: ['list.index']},
      {name: list.get('name')}
    ];
    return crumbs;
  }
});
