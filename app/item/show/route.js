import Authenticated from '../../routes/authenticated';

export default Authenticated.extend({
  model: function(params) {
    var model = this.store.findRecord('item', params.item_id, { include : 'all' });
    return model;
  },

  // setupController: function(controller, model) {
  //   console.log('Show Model', model);
  //   // controller.setProperties(model);
  //   controller.set('model', model);
  //   controller.set('breadCrumb', Ember.computed("model.name", {
  //     get() {
  //       let modelName = this.get("model.name");
  //       return `Breadcrumb ${modelName}`;
  //     }
  //   }));
  //   // controller.set('breadCrumbModel', Ember.computed.alias("model"));
  // }
});
