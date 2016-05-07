import Ember from 'ember';

import { buildValidations } from 'ember-cp-validations';
import userValidations from '../../user/user-validations';
const Validations = buildValidations(userValidations);

export default Ember.Component.extend(Validations, {
  isNotValid: Ember.computed("validations.isValid", function() {
    return !this.get('validations.isValid');
  }),

  username: Ember.computed('model.username', function() {
    return this.get('model.username');
  }),

  name: Ember.computed('model.name', function() {
    return this.get('model.name');
  }),

  actions: {
    changeDetails: function() {
      var component = this;
      var user = component.get('model');

      user.setProperties({name: this.get('name'), username: this.get('username')});

      user.save().then(function() {
        component.set('showSaveMessage', true);
      }).catch(function(e) {
        component.set('errorMessage', e.message);
        component.set('showSaveMessage', false);
      });
    }
  }
});
