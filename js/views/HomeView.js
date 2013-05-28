var app = app || {};

(function($) {
  'use strict';

  /* detailed view for a workout */
  app.HomeView = Jr.View.extend({
    template: Handlebars.compile($('#home-view').html()),
    events: {
      'click a[data-action="workouts"]': "showWorkouts",
      "click .clear-localstorage": "clearLocalStorage"
    },
    render: function() {
      this.$el.html(this.template());
      return this;
    },
    showWorkouts: function() {
      var workoutsView = new app.WorkoutsView();
      app.Router.renderView(workoutsView);
    },
    clearLocalStorage: function() {
      localStorage.clear();
      alert('cleared localStorage');
    }
  });

})(Zepto);
