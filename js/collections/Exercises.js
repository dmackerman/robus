var app = app || {};

(function() {
  'use strict';

  /* collection */
  app.ExercisesCollection = Backbone.Collection.extend({
    model: app.Exercise,
    localStorage: new Backbone.LocalStorage("Exercises")
  });

  /* create the collection */
  app.Exercises = new app.ExercisesCollection();

})();
