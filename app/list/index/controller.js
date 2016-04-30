import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToList(list) {
      this.transitionToRoute('item.index', list);
    }
  }
});
