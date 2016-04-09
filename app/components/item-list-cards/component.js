import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    goToItem(item) {
      this.sendAction('goToItem', item);
    },
    deleteItem(item) {
      if (confirm('Are you sure you want to delete this item?')) {
        item.destroyRecord();
      }
      return false;
    }
  }
});
