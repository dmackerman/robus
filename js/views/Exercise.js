var app = app || {};

(function($) {
  'use strict';

  /* detailed view for a workout */
  app.ExerciseView = Backbone.View.extend({
    tagName: 'li',
    template: Handlebars.compile($('#exercise-item').html()),
    events: {
      'click': 'showExercises',
      'click .delete': 'deleteExercise'
    },
    initialize: function() {
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.removeExercise, this);
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    deleteExercise: function(event) {
      this.model.destroy();
    },
    removeExercise: function() {
      this.$el.remove();
    },
    showExercises: function() {
      if (!$(event.target).hasClass('delete')) {
        /* create an ExerciseDetailView view */
        var exerciseDetailView = new app.ExerciseDetailView({
          model: this.model,
          workout: this.model.get('workout')
        });
        app.Router.renderView(exerciseDetailView);
        this.remove();
      }
    }
  });

})(Zepto);
