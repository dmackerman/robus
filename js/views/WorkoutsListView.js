var app = app || {};

(function($) {
  'use strict';

  /* the container view that has child views of a list of workouts */
  app.WorkoutsListView = Jr.View.extend({
    tagName: 'ul',
    className: 'list',
    initialize: function() {
      /* initialize the container view for the list of workouts */
      this.listenTo(this.collection, 'add', this.addWorkout);
    },
    render: function() {
      /* for every model in the collection, render an individual view */
      this.collection.each(this.addWorkout, this);
      return this;
    },
    addWorkout: function(workout) {
      var workoutView = new app.WorkoutView({
        model: workout
      });
      this.$el.append(workoutView.render().el);
    }
  });

})(Zepto);
