var app = app || {};

(function($) {
  'use strict';

  app.AddExerciseView = Backbone.View.extend({
    template: Handlebars.compile($('#add-exercise-view').html()),
    events: {
      'click .button-block': 'submit',
      'click .button-close': 'onCloseButton'
    },
    initialize: function(opts) {
      /* grab the workout that we want to add this exercise to */
      this.workout = opts.workout;
    },
    render: function() {
      this.$el.html(this.template({ workoutName: this.workout }));
      return this;
    },
    submit: function(e) {
      e.preventDefault(); // preventing default submission..
      var newExerciseName = $(this.el).find('input[type=text]').val();

      /* create a new exercise and associate it with a workout */
      var exercise = new app.Exercise({
        workout: this.workout,
        name: newExerciseName,
        sets: 3
      });

      this.collection.create(exercise);

      var exercisesView = new app.ExercisesView({
        collection: app.Exercises,
        workout: this.workout
      });

      app.Router.renderView(exercisesView);

    },

    onCloseButton: function() {
      var exercisesView = new app.ExercisesView({
        collection: app.Exercises,
        workout: this.workout
      });
      app.Router.renderView(exercisesView);
    }

  });

})(Zepto);
