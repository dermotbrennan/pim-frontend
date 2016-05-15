import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Breadcrumbed from './breadcrumbed';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, Breadcrumbed, {
  sessionAccount: service('session-account'),
  session: service(),

  beforeModel() {
    return this._loadCurrentUser();
  },
  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser().catch(() => this.get('session').invalidate());
  },

  _loadCurrentUser() {
    return this.get('sessionAccount').loadCurrentUser();
  },

  renderTemplate() {
    if (this.get('routeName').indexOf('.') < 0) {
      this.render('full-content');
    } else {
      this.render();
    }
  }
});
