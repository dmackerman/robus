var app = app || {};

(function($) {
  'use strict';

  /* the container view that has child views of a list of workouts */
  app.WorkoutsListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'list',
    initialize: function() {
      this.listenTo(this.collection, 'remove', this.render);
    },
    render: function() {
      /* for every model in the collection, render an individual view */
      if (this.collection.length == 0) {
        this.$el.append('<li class="empty"><strong>No workouts!</strong><br /> Add one.</li>');
      } else {
        this.collection.each(this.addWorkout, this);
      }
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
