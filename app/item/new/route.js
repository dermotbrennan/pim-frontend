import Authenticated from '../../routes/authenticated';

export default Authenticated.extend({
  model: function() {
    var list = this.modelFor('item');
    var model = this.store.createRecord('item');
    model.set('list', list);
    return model;
  },

  setupController: function(controller, model) {
    // console.log('Model', model);
    // controller.setProperties(model);
    controller.set('model', model);
    // controller.set('breadCrumb', 'New Project');
  },

  setupCrumbs() {
    var list = this.modelFor('item');
    var crumbs = [
      {name: "My Lists", path: ['list.index']},
      {name: list.get('name'), path: ['item.index', list.id]},
      {name: "Add Item"}
    ];
    return crumbs;
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
