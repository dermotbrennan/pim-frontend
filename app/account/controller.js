import ApplicationController from '../application/controller';

export default ApplicationController.extend({
  actions: {
    changeDetails: function() {
      var user = this.get('model');
      var controller = this;
      user.save().then(function() {
        controller.set('showSaveMessage', true);
      }).catch(function(e) {
        controller.set('errorMessage', e.message);
        controller.set('showSaveMessage', false);
      });
    },
    changePassword: function() {
      var controller = this;
      var user = this.get('model');
      user.set('password', this.get('password'));
      user.set('password_confirmation', this.get('password_confirmation'));
      user.save().then(function() {
        controller.set('showChangePasswordSaveMessage', true);
      }).catch(function(e) {
        controller.set('errorChangePasswordMessage', e.message);
        controller.set('showChangePasswordSaveMessage', false);
      });
    }
  }
});
