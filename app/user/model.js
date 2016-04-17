import DS from 'ember-data';

var attr = DS.attr;
// var belongsTo = DS.belongsTo;

export default DS.Model.extend({
  name: attr('string'),
  username: attr('string'),
  // email: attr('string'),
  password: attr('string'),
  password_confirmation: attr('string'),
  updatedAt: attr('date')
});
