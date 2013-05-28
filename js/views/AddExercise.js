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
      this.workout = opts.workout;
    },
    render: function() {
      this.$el.html(this.template());
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
      });

      app.Router.renderView(exercisesView);

    },

    onCloseButton: function() {
      // var exerciseView = new app.ExerciseView({
      //   collection: app.Exercises,
      // });
      // app.Router.renderView(exerciseView);
    }

  });

})(Zepto);
