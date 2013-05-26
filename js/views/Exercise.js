var app = app || {};

(function($) {
  'use strict';

  /* detailed view for a workout */
  app.ExerciseView = Backbone.View.extend({
    tagName: 'li',
    template: Handlebars.compile($('#exercise-item').html()),
    events: {
      // 'click span': 'viewWorkoutDetail',
      // 'click .delete': 'deleteExercise',
    },
    initialize: function() {
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    deleteExercise: function() {
      this.model.destroy();
    },
    remove: function() {
      this.$el.remove();
    }
  });

})(Zepto);
