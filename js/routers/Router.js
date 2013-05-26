/*global Backbone */
var app = app || {};

(function() {
  'use strict';

  app.AppRouter = Jr.Router.extend({
    routes: {
      'home': 'home',
      'workouts': 'workouts',
      'workouts/:query': 'detail'
    },
    initialize: function(options) {

    },
    home: function(){
      var homeView = new app.HomeView();
      this.renderView(homeView);
      console.log('home');
    },
    workouts: function() {
      var workoutsView = new app.WorkoutsView();
      this.renderView(workoutsView);
      console.log('workouts');
    }

  });

  // Initiate the router
  var app_router = new app.AppRouter();
  Backbone.history.start();

})();
