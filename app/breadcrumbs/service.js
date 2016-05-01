import Ember from 'ember';

export default Ember.Service.extend({
  crumbs: null,

  init() {
    this._super(...arguments);
    this.set('crumbs', []);
  },

  setCrumbs(crumbs) {
    this.set('crumbs', crumbs);
  },
});
