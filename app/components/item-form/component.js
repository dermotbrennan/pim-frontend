import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save: function() {
      var component = this;

      var model = component.get('model');
      var file = document.getElementById('file-field').files[0];
      model.set('image', file);

      model.save().then(function() {
        component.set('showSaveMessage', true);
      }).catch(function() {
        component.set('showSaveMessage', false);
      });
      return true;
    }
  },
  showSaveMessage: false,
  shouldShowSaveMessage: Ember.computed('model.hasDirtyAttributes', function() {
    if (this.get('model').get('hasDirtyAttributes')) {
      this.set('showSaveMessage', false);
    }
    return this.get('showSaveMessage');
  })
});
