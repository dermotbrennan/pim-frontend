import ENV from 'inventory-client/config/environment';
import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    if (serialized && serialized.length > 0 && serialized.indexOf('http') !== 0 ) {
      serialized = ENV.apiBaseURL + serialized;
    }
    return serialized;
  },

  serialize(deserialized) {
    return deserialized;
  }
});
