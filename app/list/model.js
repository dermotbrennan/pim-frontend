import DS from 'ember-data';
import EmberValidations from 'ember-validations';

var attr = DS.attr;
var belongsTo = DS.belongsTo;
var hasMany = DS.hasMany;

export default DS.Model.extend(EmberValidations, {
  name: attr('string'),
  user: belongsTo('user'),
  items: hasMany('item'),
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
