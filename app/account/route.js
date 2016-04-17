import Authenticated from '../routes/authenticated';

export default Authenticated.extend({
  setupController: function(controller, model) {
    controller.set('model', this.get('sessionAccount.user'));
  },
});
