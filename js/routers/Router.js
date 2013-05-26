/*global Backbone */
var app = app || {};

(function() {
  'use strict';

  app.AppRouter = Backbone.Router.extend({
    routes: {
      "workout/:query": "detail"
    },
    initialize: function(options) {

    }
  });

  // Initiate the router
  var app_router = new app.AppRouter();
  Backbone.history.start();

})();
