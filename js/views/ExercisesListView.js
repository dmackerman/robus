var app = app || {};

(function($) {
  'use strict';

  /* detailed view for a workout */
  app.ExercisesListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'list',
    initialize: function() {
      this.listenTo(this.collection, 'add', this.addWorkout);
    },
    render: function() {
      this.collection.each(this.addWorkout, this);
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
