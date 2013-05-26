var app = app || {};

(function($) {
  'use strict';

  /* the individual list item in the workouts list */
  app.WorkoutView = Jr.View.extend({
    tagName: 'li',
    template: Handlebars.compile($('#workout-item').html()),
    events: {
      'click span': 'viewWorkoutDetail',
      'click .edit': 'editWorkout',
      'click .delete': 'deleteWorkout',
    },
    initialize: function() {
      /* re-render the view when the model changes (ie. edit or delete) */
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    viewWorkoutDetail: function() {
      /* create our detail view */
      var workoutDetailView = new app.WorkoutDetailView({
        model: this.model
      });
    },
    editWorkout: function() {
      /* inject the edit view */
      // this.model.set('name', newName);
    },
    deleteWorkout: function() {
      this.model.destroy();
    },
    remove: function() {
      this.$el.remove();
    }
  });

})(Zepto);
