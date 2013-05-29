var app = app || {};

(function($) {
  'use strict';

  /* the individual list item in the workouts list */
app.WorkoutView = Jr.View.extend({
    tagName: 'li',
    template: Handlebars.compile($('#workout-item').html()),
    events: {
      'click': 'showWorkout',
      'click .delete': 'deleteWorkout'
    },
    initialize: function() {
      /* re-render the view when the model changes (ie. edit or delete) */
      this.model.on('destroy', this.removeWorkout, this);
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    deleteWorkout: function(event) {
      this.model.destroy();
    },
    removeWorkout: function() {
      // var me = this;
      // me.$el.animate({ opacity: 0 }, 250, 'ease-out', function() {
      this.$el.remove();
      // });
    },
    showWorkout: function(event) {
      if (!$(event.target).hasClass('delete')) {
        /* create an Exercise view */
        var exercisesView = new app.ExercisesView({
          workout: this.model.get('name'),
          collection: app.Exercises
        });
        app.Router.renderView(exercisesView);
        this.remove();
      }
    }
  });

})(Zepto);
