import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save: function() {
      var component = this;
      this.get('model').save().then(function() {
        component.set('saveMessage', true);
      }).catch(function() {
        component.set('saveMessage', false);
      });
      return true;
    },
    resetMessage: function() {
      this.set('saveMessage', false);
    }
  },
  saveMessage: false
});
