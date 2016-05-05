import Ember from 'ember';
import DS from 'ember-data';

var attr = DS.attr;
// var belongsTo = DS.belongsTo;

import {
  validator, buildValidations
}
from 'ember-cp-validations';

const Validations = buildValidations({
  username: validator('presence', true),
  name: validator('presence', true),
  password: [
    validator('presence', true),
    validator('length', {
      min: 4,
      max: 8
    })
  ],
  password_confirmation: [
    validator('presence', true),
    validator('confirmation', {
      on: 'password',
      message: '{description} do not match',
      description: 'Passwords'
    })
  ]
  // email: [
  //   validator('presence', true),
  //   validator('format', { type: 'email' })
  // ],
  // emailConfirmation: [
  //   validator('presence', true),
  //   validator('confirmation', {
  //     on: 'email',
  //     message: '{description} do not match',
  //     description: 'Email addresses'
  //   })
  // ]
});

export default DS.Model.extend(Validations, {
  name: attr('string'),
  username: attr('string'),
  // email: attr('string'),
  password: attr('string'),
  password_confirmation: attr('string'),
  updatedAt: attr('date'),

  // an alias for ember-simple-auth
  identification: Ember.computed('username', function() {
    return this.get('username');
  }),

  // passwordConfirmation: Ember.computed('password_confirmation', function() {
  //   return this.get('password_confirmation');
  // })
});
