import Ember from 'ember';
// import EmberValidations from 'ember-validations';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  isNotValid: Ember.computed("model.validations.isValid", function() {
    return !this.get('model.validations.isValid');
  }),

  anyErrors: Ember.computed("errorMessage", "model.errors.[]", function() {
    return (this.get('errorMessage') || !this.get('model.errors.isEmpty'));
  }),

  actions: {
    register: function() {
      var user = this.get('model');
      var controller = this;

      user.save().then(function() {
        var credentials = user.getProperties('identification', 'password');
        var authenticator = 'authenticator:jwt';

        controller.get('session').set('data.identification', user.get('username'));

        controller.get('session').authenticate(authenticator, credentials).catch((reason) => {
          // console.log(reason);
          controller.set('errorMessage', reason.error || reason);
        }).then(function() {
          controller.transitionTo('list.index');
        });
      }, function() {
        controller.set('errorMessage', "Registration failed");
      }).catch(function(e) {
        console.log(e);
        controller.set('errorMessage', e.message);
      });
    }
  },
});
