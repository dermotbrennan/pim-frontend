import Ember from 'ember';
const { service } = Ember.inject;

export default Ember.Mixin.create({
  breadcrumbsService: service('breadcrumbs'),

  routeCrumbs: null,

  setBreadcrumbs: function() {
    this.get('breadcrumbsService').setCrumbs(this.routeCrumbs);
  }.on('activate'),

  clearBreadcrumbs: function() {
    this.get('breadcrumbsService').setCrumbs([]);
  }.on('deactivate'),

  afterModel: function(model) {
    if (typeof(this.setupCrumbs) === 'function') {
      this.routeCrumbs = this.setupCrumbs(model);
      this.get('breadcrumbsService').setCrumbs(this.routeCrumbs);
    }
  }
});
