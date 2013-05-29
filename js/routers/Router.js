var app = app || {};

(function() {
  'use strict';

  app.AppRouter = Jr.Router.extend({
    routes: {
      'home': 'home',
      'add': 'addWorkout',
      'add-exercise' : 'addExercise',
      'workouts': 'workouts',
      'workouts/:query': 'workoutDetails'
    }
  });

  // Initiate the router
  app.Router = new app.AppRouter();

  // Backbone.history.start();

})();
