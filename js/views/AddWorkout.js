var app = app || {};

(function($) {
  'use strict';

  app.AddWorkoutView = Backbone.View.extend({
    template: Handlebars.compile($('#add-workout-view').html()),
    events: {
      'submit': 'submit' // binding submit click to submit function..
    },
    initialize: function() {

    },
    render: function() {
      this.$el.html(this.template());
      return this;
    },
    submit: function(e) {
      e.preventDefault(); // preventing default submission..
      var newWorkoutName = $(this.el).find('input[type=text]').val();
      var workout = new app.Workout({
        name: newWorkoutName,
        slug: 'tits'
      });
      this.collection.create(workout);
      console.log(this.collection);
      Jr.Navigator.navigate('workouts', {
        trigger: true,
        animation: {
          type: Jr.Navigator.animations.SLIDE_STACK,
          direction: Jr.Navigator.directions.DOWN
        }
      });
    }
  });

})(Zepto);
