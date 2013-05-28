/*global Backbone */
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
    },
    initialize: function() {
    },

    home: function(){
      var homeView = new app.HomeView();
      this.renderView(homeView);
    },

    workouts: function() {
      var workoutsView = new app.WorkoutsView();
      this.renderView(workoutsView);
    },

    // workoutDetails: function(options) {
    //   var exercisesView = new app.ExercisesView();
    //   this.renderView(exercisesView);
    // },

    // addWorkout: function(options) {
    //   var addWorkoutView = new app.AddWorkoutView({
    //     collection: app.Workouts,
    //   });
    //   this.renderView(addWorkoutView);
    // },

    addExercise: function(options) {
      var addExerciseView = new app.AddExerciseView({
        collection: app.Exercises
      });
      this.renderView(addExerciseView);
    }


  });

  // Initiate the router
  app.Router = new app.AppRouter();

  Backbone.history.start();

})();
