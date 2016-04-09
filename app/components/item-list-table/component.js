import Ember from 'ember';

export default Ember.Component.extend({
  values: Ember.computed.mapBy("items", "value"),
  totalValue: Ember.computed.sum("values")
});
