import {
  validator
}
from 'ember-cp-validations';

export default {
  password: {
    validators: [
      validator('presence', true),
      validator('length', {
        min: 4,
        max: 8
      }),
    ],
    disabled: function() {
      // return !this.get('shouldValidatePassword');
      return false;
    },
    dependentKeys: ['shouldValidatePassword']
  },
  password_confirmation: {
    validators: [
      validator('presence', true),
      validator('confirmation', {
        on: 'password',
        message: '{description} do not match',
        description: 'Passwords'
      })
    ],
    disabled: function() {
      // return !this.get('shouldValidatePassword');
      return false;
    },
    dependentKeys: ['shouldValidatePassword']
  }
};
