import Ember from 'ember';
import { buildValidations } from 'ember-cp-validations';
import passwordValidations from '../../user/password-validations';

const Validations = buildValidations(passwordValidations);

export default Ember.Component.extend(Validations, {
  isNotValid: Ember.computed("validations.isValid", function() {
    return !this.get('validations.isValid');
  }),

  password: null,
  password_confirmation: null,

  actions: {
    changePassword: function() {
      var component = this;
      var user = component.get('model');
      user.set('password', component.get('password'));
      user.set('password_confirmation', component.get('password_confirmation'));
      user.save().then(function() {
        component.set('showChangePasswordSaveMessage', true);
      }).catch(function(e) {
        component.set('errorChangePasswordMessage', e.message);
        component.set('showChangePasswordSaveMessage', false);
      });
    }
  }
});
