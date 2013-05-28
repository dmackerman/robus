var app = app || {};

(function($) {
  'use strict';

  app.AddWorkoutView = Backbone.View.extend({
    template: Handlebars.compile($('#add-workout-view').html()),
    events: {
      'click .button-block': 'submit',
      'click .button-close': 'onCloseButton'
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
        slug: newWorkoutName.toLowerCase()
      });

      this.collection.create(workout);

      var workoutsView = new app.WorkoutsView({ collection: app.Workouts });
      app.Router.renderView(workoutsView);

    },
    onCloseButton: function() {
      var workoutsView = new app.WorkoutsView({
        collection: app.Workouts,
      });
      app.Router.renderView(workoutsView);
    }

  });

})(Zepto);
