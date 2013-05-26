var app = app || {};

(function($) {
  'use strict';

  /* detailed view for a workout */
  app.WorkoutDetailView = Backbone.View.extend({
    template: Handlebars.compile($('#workout-item-detail').html()),
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

})(Zepto);
