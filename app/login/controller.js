import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:jwt';

      this.get('session').set('data.identification', this.get('identification'));

      this.get('session').authenticate(authenticator, credentials).catch((reason) => {
        console.log(reason);
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
