var app = app || {};

(function($) {
  'use strict';

  /* detailed view for a workout */
  app.ExercisesListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'list',
    initialize: function(options) {
      this.exercisesInWorkout = this.collection.where({
        workout: options.workout
      });
      this.listenTo(this.collection, 'add', this.addExercise);
    },
    render: function() {
      /* we only want to render the exercises that match the current workout */
      _.each(this.exercisesInWorkout, this.addExercise, this);
      return this;
    },
    addExercise: function(exercise) {
      var exerciseView = new app.ExerciseView({
        model: exercise
      });
      this.$el.append(exerciseView.render().el);
    }
  });

})(Zepto);
