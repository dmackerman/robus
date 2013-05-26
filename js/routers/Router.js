/*global Backbone */
var app = app || {};

(function() {
  'use strict';

  app.AppRouter = Jr.Router.extend({
    routes: {
      'home': 'home',
      'add': 'addWorkout',
      'workouts': 'workouts',
      'workouts/:query': 'workoutDetails'
    },
    initialize: function() {
      console.log('app init');
    },

    home: function(){
      var homeView = new app.HomeView();
      this.renderView(homeView);
    },

    workouts: function() {
      var workoutsView = new app.WorkoutsView();
      this.renderView(workoutsView);
    },

    workoutDetails: function() {
      var exercisesView = new app.ExercisesView();
      this.renderView(exercisesView);
    },

    addWorkout: function() {
      var addWorkoutView = new app.AddWorkoutView({
        collection: app.Workouts
      });
      this.renderView(addWorkoutView);
    }


  });

  // Initiate the router
  var app_router = new app.AppRouter();
  Backbone.history.start();

})();
