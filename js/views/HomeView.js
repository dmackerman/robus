var app = app || {};

(function($) {
  'use strict';

  /* detailed view for a workout */
  app.HomeView = Jr.View.extend({
    template: Handlebars.compile($('#home-view').html()),
    events: {
      'click a[data-action="workouts"]': "showWorkouts"
    },
    render: function() {
      this.$el.html(this.template());
      return this;
    },
    showWorkouts: function() {
      Jr.Navigator.navigate('workouts', {
        trigger: true,
        animation: {
          type: Jr.Navigator.animations.SLIDE_STACK,
          direction: Jr.Navigator.directions.LEFT
        }
      });
    }
  });

})(Zepto);
