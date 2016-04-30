import Ember from 'ember';

export default Ember.Component.extend({
  backgroundStyle: Ember.computed('item.image_medium_url', function() {
    return Ember.String.htmlSafe("background: url('" + this.item.get('image_medium_url') + "') center no-repeat;");
  }),
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
