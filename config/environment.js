/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'inventory-client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    apiBaseURL: process.env.API_BASE_URL,

    contentSecurityPolicy: {
      'style-src': "'self' 'unsafe-inline'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
    ENV.baseURL = '/pim-frontend/';

  }

  ENV['ember-simple-auth'] = {
    // authorizer: 'simple-auth-authorizer:token',
    authorizer: 'authorizer:token',
    crossOriginWhitelist: ['*']
  };
  ENV['ember-simple-auth-token'] = {
    identificationField: 'username',
    passwordField: 'password',
    refreshAccessTokens: false,
    serverTokenEndpoint: ENV.apiBaseURL + '/knock/auth_token',
    // serverTokenRefreshEndpoint: ENV.apiBaseURL + '/knock/auth_token',
    tokenPropertyName: 'jwt',
    timeFactor: 1000,
    refreshLeeway: 300 // Refresh the token 5 minutes (300s) before it expires.
  };

  return ENV;
};
