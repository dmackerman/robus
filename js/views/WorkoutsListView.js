var app = app || {};

(function($) {
  'use strict';

  /* the container view that has child views of a list of workouts */
  app.WorkoutsListView = Jr.View.extend({
    tagName: 'ul',
    className: 'list',
    initialize: function() {
      /* initialize the container view for the list of workouts */
      this.collection.on('add', this.addOne, this);
    },
    render: function() {
      this.collection.each(this.addOne, this);
      return this;
    },
    addOne: function(workout) {
      var workoutView = new app.WorkoutView({
        model: workout
      });
      this.$el.append(workoutView.render().el);
    }
  });

})(Zepto);
