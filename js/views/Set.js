var app = app || {};

(function($) {
  'use strict';

  /* detailed view for a workout */
  app.Set = Backbone.View.extend({
    tagName: 'li',
    template: Handlebars.compile($('#set-item').html()),
    initialize: function() {
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.removeExercise, this);
    },
    render: function() {
      this.$el.html(this.template());
      return this;
    }
  });

})(Zepto);
