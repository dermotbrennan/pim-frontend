import DS from 'ember-data';
import EmberValidations from 'ember-validations';

var attr = DS.attr;
// var belongsTo = DS.belongsTo;

export default DS.Model.extend(EmberValidations, {
  name: attr('string'),
  value: attr('number'),
  image: attr('image'),
  image_thumb_url: attr('image-url'),
  image_medium_url: attr('image-url'),
  created_at: attr('date'),
  updated_at: attr('date'),
  validations: {
    'name': {
      presence: true,
      length: {
        minimum: 3
      }
    }
  }
});
