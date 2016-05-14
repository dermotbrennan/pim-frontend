import Authenticated from '../../routes/authenticated';

export default Authenticated.extend({
  model: function() {
    return this.store.createRecord('list');
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    // controller.set('breadCrumb', 'New Project');
  },

  setupCrumbs() {
    var crumbs = [
      {name: "My Lists", path: ['list.index']},
      {name: "New List"}
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
