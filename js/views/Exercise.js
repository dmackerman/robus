var app = app || {};

(function($) {
  'use strict';

  /* detailed view for a workout */
  app.ExerciseView = Backbone.View.extend({
    tagName: 'li',
    template: Handlebars.compile($('#exercise-item').html()),
    events: {
      'click': 'showExercise',
      'click .delete': 'deleteExercise'
    },
    initialize: function(options) {
      this.model.on('destroy', this.removeExercise, this);
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON({ exercisesInWorkout: this.exercisesInWorkout })));
      return this;
    },
    deleteExercise: function() {
      this.model.destroy();
    },
    removeExercise: function() {
      console.log('remove');
      this.$el.remove();
    },
    showExercise: function() {
      if (!$(event.target).hasClass('delete')) {
        /* create an ExerciseDetailView view */
        var exerciseDetailView = new app.ExerciseDetailView({
          model: this.model,
          workout: this.model.get('workout')
        });
        app.Router.renderView(exerciseDetailView);
        this.remove();
      }
    }
  });

})(Zepto);
