import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});

  this.route('item', {
      path: "/items"
    }, function() {
      this.route("index", {path: '/'});
      this.route("new");
      // this.route('asset', {
      //   path: "/:item_id/assets",
      //   resetNamespace: true
      // }, function() {
      //   this.route('show', {
      //     path: "/:asset_id"
      //   });
      //   // this.route('comments', { resetNamespace: true }, function() {
      //   //   this.route('new');
      //   // });
      // });
      this.route("show", {
        path: "/:item_id",
      });
      this.route("edit", {
        path: "/:item_id/edit"
      });
    })
});

export default Router;
