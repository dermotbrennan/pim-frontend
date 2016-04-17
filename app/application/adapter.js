import DS from 'ember-data';
import ENV from 'inventory-client/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:application',
  coalesceFindRequests: true,
  // host: 'http://127.0.0.1:3000',
  host: ENV.apiBaseURL
  // namespace: 'api/v1',
  //this is dependent on production/development environment
  //It is configured in config/environment.js
  //host: ClientENV.hostUrl
  //add IP from $DOCKER_HOST if --docker flag is set
  //host: 'http://192.168.59.103:1337'
});
