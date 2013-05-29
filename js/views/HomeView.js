var app = app || {};

(function($) {
  'use strict';

  app.HomeView = Backbone.View.extend({
    template: Handlebars.compile($('#home-view').html()),
    events: {
      'click #show-workouts-list': 'showWorkouts',
      "click #clear-localstorage": "clearLocalStorage"
    },
    initialize: function() {

    },
    render: function() {
      this.$el.html(this.template({ numberOfWorkouts: this.collection.length }));
      return this;
    },
    showWorkouts: function() {
      var workoutsView = new app.WorkoutsView({ collection: app.Workouts });
      app.Router.renderView(workoutsView);

      /* cleanup the view after we move away */
      this.remove();
    },
    clearLocalStorage: function(event) {
      event.preventDefault();
      localStorage.clear();
    }
  });

})(Zepto);
