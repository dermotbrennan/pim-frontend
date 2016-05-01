import Authenticated from '../routes/authenticated';

export default Authenticated.extend({
  model: function (params) {
    var list = this.store.findRecord('list', params.list_id);
    return list;
  }
});
