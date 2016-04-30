import ApplicationAdapter from '../application/adapter';
// import FormDataAdapterMixin from 'ember-cli-form-data/mixins/form-data-adapter';

export default ApplicationAdapter.extend({
  /* adapted from ember-cli-form-data */

  // Overwrite to change the request types on which Form Data is sent
  formDataTypes: ['POST', 'PUT', 'PATCH'],

  // Overwrite to flatten the form data by removing the root
  disableRoot: false,

  files: {},

  ajaxOptions: function(url, type, options) {
    var data;

    if (options && 'data' in options) { data = options.data; }

    // this.files = data['attributes'];
    // console.log(this.files);

    // put all file attributes to one side
    if (data && data.data && data.data.attributes) {
      var adapter = this;
      Object.keys(data.data.attributes).forEach(function(attr_key) {
        var attribute = data.data.attributes[attr_key];
        if (attribute && typeof(attribute) === 'object' && attribute.constructor && attribute.constructor.name === "File") {
          adapter.files[attr_key] = attribute;
        }
      });
    }

    // console.log("files", this.files);

    var hash = this._super.apply(this, arguments);

    if (typeof FormData !== 'undefined' && data && this.formDataTypes.indexOf(type) >= 0) {
      hash.processData = false;
      hash.contentType = false;
      hash.data = this._getFormData(data);
    }

    return hash;
  },

  _getFormData: function(data) {
    var formData = new FormData();
    var root = Object.keys(data)[0];

    // console.log("getformdata", data);

    // Object.keys(data[root]).forEach(function(key) {
    //   if (typeof data[root][key] !== 'undefined') {
    //     if (this.get('disableRoot') ) {
    //       formData.append(key, data[root][key]);
    //     } else {
    //       formData.append(root + "[" + key + "]", data[root][key]);
    //     }
    //   }
    // }, this);

    // console.log("files", this.files);

    if (this.files) {
      formData.append(root, JSON.stringify(data.data));
      var files = this.files;
      Object.keys(this.files).forEach(function(key) {
        var file = files[key];
        formData.append(key, file, file.name);
      });
    }


    return formData;
  }
 });
