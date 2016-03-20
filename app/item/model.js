import DS from 'ember-data';

var attr = DS.attr;
// var belongsTo = DS.belongsTo;

export default DS.Model.extend({
  name: attr('string'),
  value: attr('string'),
  // project: belongsTo('project'),
  created_at: attr('date'),
  updated_at: attr('date')
});
