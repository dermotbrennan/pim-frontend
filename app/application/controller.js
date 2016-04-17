import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  sessionAccount: Ember.inject.service('sessionAccount'),
  actions: {
     transitionToLoginRoute() {
       this.transitionToRoute('login');
     }
   }
});
