import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isNotValid: Ember.computed("model.validations.isValid", function() {
    return !this.get('model.validations.isValid');
  }),
  showSaveMessage: false,
  shouldShowSaveMessage: Ember.computed('model.hasDirtyAttributes', function() {
    if (this.get('model').get('hasDirtyAttributes')) {
      this.set('showSaveMessage', false);
    }
    return this.get('showSaveMessage');
  }),

  actions: {
    save: function() {
      var component = this;

      var model = component.get('model');
      var file = document.getElementById('file-field').files[0];
      model.set('image', file);

      model.save().then(function() {
        console.log("saved..");
        component.set('model', component.get('store').createRecord('item'));
        model = component.get('model');
        model.rollbackAttributes();
        component.set('showSaveMessage', true);
      }).catch(function() {
        component.set('showSaveMessage', false);
      });
      return true;
    }
  }
});
