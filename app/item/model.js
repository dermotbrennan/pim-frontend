import DS from 'ember-data';

var attr = DS.attr;
var belongsTo = DS.belongsTo;

import {validator, buildValidations} from 'ember-cp-validations';

const Validations = buildValidations({
  name: {
    validators: [
      validator('presence', true),
      validator('length', {
        min: 3
      })
    ]
  },
  value: {
    validators: [
      validator('presence', true),
      validator('number', {
        allowString: true
      })
    ]
  }
});

export default DS.Model.extend(Validations, {
  name: attr('string'),
  value: attr('number'),
  image: attr('image'),
  list: belongsTo('list'),
  image_thumb_url: attr('image-url'),
  image_medium_url: attr('image-url'),
  created_at: attr('date'),
  updated_at: attr('date')
});
