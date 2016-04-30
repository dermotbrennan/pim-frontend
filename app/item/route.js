import Authenticated from '../routes/authenticated';

export default Authenticated.extend({
  model: function (params) {
    return this.store.findRecord('list', params.list_id);
  }
});
