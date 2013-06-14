var app = app || {};

(function() {
  'use strict';

  app.Set = Backbone.Model.extend({
    toJSON: function() {
      var json = Backbone.Model.prototype.toJSON.apply(this, arguments);
      json.cid = this.cid;
      return json;
    }
  });

})();
