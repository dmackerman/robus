var app = app || {};

(function ($) {

  "use strict";

  /* create our workouts collection */
  var workoutsCollection = new app.WorkoutsCollection();

  var workoutsView = new app.WorkoutsView({ collection: workoutsCollection });

  $('.workouts-list').html(workoutsView.render().el); // adding people view in DOM.

  var addWorkout = new app.AddWorkout({ collection: workoutsCollection });

})(jQuery);
