import EmberUploader from 'ember-uploader';
import ENV from 'inventory-client/config/environment';

export default EmberUploader.FileField.extend({
  url: Ember.computed('item', function() {
    return ENV.apiBaseURL + '/uploads?item_id=' + this.get('item').id;
  }),
  filesDidChange: function(files) {
   const uploader = EmberUploader.Uploader.create({
     url: this.get('url')
   });

   if (!Ember.isEmpty(files)) {
     uploader.upload(files[0]);
   }
 }
});
