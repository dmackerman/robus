var app = app || {};

(function($) {
  'use strict';

  /* the container view that contains the child view: app.WorkoutsListView */
  app.WorkoutsView = Jr.View.extend({
    template: Handlebars.compile($('#workouts-view').html()),
    events: {
      'click .button-prev': 'onClickButtonPrev',
      'click .button-add': 'onClickButtonAdd'
    },
    initialize: function() {
      /* initialize the container view for the list of workouts and pass it our collection */
      /* and fetch the data from our collection (which is in localStorage) */
      var that = this;
      app.Workouts.fetch({
        success: function() {
          that.workoutsListView = new app.WorkoutsListView({ collection: app.Workouts });
        }
      });
    },
    render: function() {
      this.$el.html(this.template());
      /* find our .content block within the template, and render the view */
      this.$el.find('.content').html(this.workoutsListView.render().el);
      return this;
    },
    onClickButtonPrev: function() {
      Jr.Navigator.navigate('home', {
        trigger: true,
        animation: {
          type: Jr.Navigator.animations.SLIDE_STACK,
          direction: Jr.Navigator.directions.RIGHT
        }
      });
    },
    onClickButtonAdd: function() {
      var addWorkoutView = new app.AddWorkoutView({
        collection: app.Workouts,
      });
      app.Router.renderView(addWorkoutView);
    }
  });

})(Zepto);
