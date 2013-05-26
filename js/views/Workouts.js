var app = app || {};

(function($) {
  'use strict';

  // View for all the workouts
  app.WorkoutsView = Backbone.View.extend({
    el: $('.workout-list'),
    initialize: function() {
      this.collection.on('add', this.addOne, this); // listeners/anouncers for the collection on add..

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

})(jQuery);
