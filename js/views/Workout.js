var app = app || {};

(function($) {
  'use strict';

  /* the individual list item in the workouts list */
  app.WorkoutView = Jr.View.extend({
    tagName: 'li',
    template: Handlebars.compile($('#workout-item').html()),
    events: {
      'click': 'showWorkout',
      'click .delete': 'deleteWorkout',
    },
    initialize: function() {
      /* re-render the view when the model changes (ie. edit or delete) */
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.removeWorkout, this);
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    deleteWorkout: function(event) {
      this.model.destroy();
      return false;
    },
    removeWorkout: function() {
      this.$el.remove();
    },
    showWorkout: function() {
      console.log('ya clicked a workout');
      /* create an Exercise view */
      var workoutName = this.model.get('name');
      var exercisesView = new app.ExercisesView({
        workout: workoutName
      });

      app.Router.renderView(exercisesView);

    }
  });

})(Zepto);
