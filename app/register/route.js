import Unauthenticated from '../routes/unauthenticated';

export default Unauthenticated.extend({
  model: function() {
    return this.store.createRecord('user');
  },
});
