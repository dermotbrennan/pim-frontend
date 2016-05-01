import Authenticated from '../../routes/authenticated';

export default Authenticated.extend({
  model: function() {
    return this.store.findAll('list');
  },
  setupController: function(controller, model) {
    controller.set('lists', model);
  },
  setupCrumbs(item) {
    var crumbs = [
      {name: "My Lists"},
    ];
    return crumbs;
  }
});
