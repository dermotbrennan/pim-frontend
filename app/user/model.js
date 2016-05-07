import Ember from 'ember';
import DS from 'ember-data';

var attr = DS.attr;
// var belongsTo = DS.belongsTo;

import { buildValidations } from 'ember-cp-validations';

import userValidations from './user-validations';
import passwordValidations from './password-validations';

var allUserValidations = Ember.copy(userValidations, true);
Ember.merge(allUserValidations, passwordValidations);

const Validations = buildValidations(allUserValidations);

export default DS.Model.extend(Validations, {
  name: attr('string'),
  username: attr('string'),
  // email: attr('string'),
  password: attr('string'),
  password_confirmation: attr('string'),
  createdAt: attr('date'),
  updatedAt: attr('date'),

  // an alias for ember-simple-auth
  identification: Ember.computed('username', function() {
    return this.get('username');
  }),

  // passwordConfirmation: Ember.computed('password_confirmation', function() {
  //   return this.get('password_confirmation');
  // })
});
