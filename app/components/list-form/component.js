import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save: function() {
      var component = this;

      var model = component.get('model');

      model.save().then(function() {
        console.log("saved..");
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
