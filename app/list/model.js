import DS from 'ember-data';

var attr = DS.attr;
var belongsTo = DS.belongsTo;
var hasMany = DS.hasMany;

import {validator, buildValidations} from 'ember-cp-validations';

const Validations = buildValidations({
  name: {
    validators: [
      validator('presence', true),
      validator('length', {
        min: 3
      })
    ]
  }
});

export default DS.Model.extend(Validations, {
  name: attr('string'),
  user: belongsTo('user'),
  items: hasMany('item'),
  created_at: attr('date'),
  updated_at: attr('date')
});
