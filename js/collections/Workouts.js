var app = app || {};

(function() {
  'use strict';

  /* collection */
  app.WorkoutsCollection = Backbone.Collection.extend({
    model: app.Workout,
    localStorage: new Backbone.LocalStorage("Workouts")
  });

  /* create the collection */
  app.Workouts = new app.WorkoutsCollection();

})();
