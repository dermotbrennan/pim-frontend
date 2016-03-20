import Ember from 'ember';
// import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

// var itemsEditRoute = Ember.Route.extend(AuthenticatedRouteMixin);
var itemsEditRoute = Ember.Route.extend({
  model: function(params) {
    console.log(params);
    var model = this.store.findRecord('item', params.item_id);
    return model;
  },

  setupController: function(controller, model) {
    console.log('Edit Model', model);
    // controller.setProperties(model);
    controller.set('model', model);
    // controller.set('breadCrumb', Ember.computed("model.name", {
    //   get() {
    //     let modelName = this.get("model.name");
    //     return `Breadcrumb ${modelName}`;
    //   }
    // }));
    // controller.set('breadCrumbModel', Ember.computed.alias("model"));
  }
});

export default itemsEditRoute;
