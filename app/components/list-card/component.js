import Ember from 'ember';

export default Ember.Component.extend({
  backgroundStyle: Ember.computed('lists[]', function() {
    var image_medium_url = this.get('list.items.firstObject.image_medium_url');
    if (image_medium_url) {
      return Ember.String.htmlSafe("background: url('" + image_medium_url + "') center no-repeat;");
    } else {
      return null;
    }
  }),
  actions: {
    goToList(list) {
      this.sendAction('goToList', list);
    },
    deleteList(list) {
      if (confirm('Are you sure you want to delete this list?')) {
        list.destroyRecord();
      }
      return false;
    }
  }
});
