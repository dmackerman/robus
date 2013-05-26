var app = app || {};

(function($) {
  'use strict';

  /* detailed view for a workout */
  app.HomeView = Jr.View.extend({
    template: Handlebars.compile($('#home-view').html()),
    render: function() {
      this.$el.html(this.template());
      return this;
    }
  });

})(Zepto);
