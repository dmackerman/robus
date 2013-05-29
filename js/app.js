var app = app || {};

(function ($) {

  "use strict";

  /* fetch our workouts */
  app.Workouts.fetch({
    success: function() {
      var homeView = new app.HomeView({ collection: app.Workouts });
      app.Router.renderView(homeView);
      app.Router.navigate('home');
    }
  });

  /* fetch our exercises */
  app.Exercises.fetch();

})(Zepto);
