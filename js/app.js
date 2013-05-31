var app = app || {};

(function ($) {

  "use strict";

  /* fetch our workouts */
  app.Workouts.fetch({

    /* once we've succesfully gotten that info, navigate and then fetch our other collections */
    success: function() {
      var homeView = new app.HomeView({ collection: app.Workouts });
      app.Router.renderView(homeView);
      app.Router.navigate('home');

      /* fetch our Exercises and Sets */
      app.Exercises.fetch();
      app.Sets.fetch();

    }
  });

})(Zepto);
