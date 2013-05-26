var app = app || {};

(function($) {
  'use strict';

  app.AddWorkout = Backbone.View.extend({
    el: $('#addWorkout'),
    events: {
      'submit': 'submit' // binding submit click to submit function..
    },
    submit: function(e) {
      e.preventDefault(); // preventing default submission..
      var inputField = $(this.el).find('input[type=text]');
      var newWorkoutName = inputField.val();
      var workout = new app.Workout({
        name: newWorkoutName
      });
      this.collection.add(workout);
      inputField.val("");
    }
  });

})(jQuery);
