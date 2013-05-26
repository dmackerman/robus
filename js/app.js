var app = app || {};

(function ($) {

  "use strict";

  /* create our workouts collection */
  // var workoutsCollection = new app.WorkoutsCollection();

  //  instantiate our list of workouts, and the add workouts view
  // // var workoutsView = new app.WorkoutsView({ collection: workoutsCollection });

  // $('.content').html(workoutsView.render().el);

  Jr.Navigator.navigate('home',{
    trigger: true
  });


})(Zepto);
