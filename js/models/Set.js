var app = app || {};

(function() {
  'use strict';

  app.Set = Backbone.Model.extend({
    defaults: {
      weight: 0,
      reps: 0
    },

    /* expose the models CID in toJSON() */
    toJSON: function() {
      var json = Backbone.Model.prototype.toJSON.apply(this, arguments);
      json.cid = this.cid;
      return json;
    }
  });

})();
