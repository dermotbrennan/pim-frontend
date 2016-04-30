import Authenticated from '../routes/authenticated';

export default Authenticated.extend({
  setupController: function(controller) {
    controller.set('model', this.get('sessionAccount.user'));
  },
});
