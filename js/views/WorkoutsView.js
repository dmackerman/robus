var app = app || {};

(function($) {
  'use strict';

  /* the container view that contains the child view: app.WorkoutsListView */
  app.WorkoutsView = Backbone.View.extend({
    template: Handlebars.compile($('#workouts-view').html()),
    events: {
      'click .button-prev': 'onClickButtonPrev',
      'click .button-add': 'onClickButtonAdd'
    },
    initialize: function() {
      /* initialize the container view for the list of workouts and pass it our collection */
      /* and fetch the data from our collection (which is in localStorage) */
      var me = this;
      app.Workouts.fetch({
        success: function() {
          me.workoutsListView = new app.WorkoutsListView({ collection: app.Workouts });
        }
      });

    },
    render: function() {
      this.$el.html(this.template());
      this.$el.find('.content').html(this.workoutsListView.render().el);
      return this;
    },
    onClickButtonPrev: function() {
      var homeView = new app.HomeView({ collection: app.Workouts });
      app.Router.renderView(homeView);
      this.remove();
    },
    onClickButtonAdd: function() {
      var addWorkoutView = new app.AddWorkoutView({ collection: app.Workouts });
      app.Router.renderView(addWorkoutView);
      this.remove();
    }
  });

})(Zepto);
