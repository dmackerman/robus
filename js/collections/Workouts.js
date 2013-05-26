var app = app || {};

(function() {
  'use strict';

  /* collection */
  app.WorkoutsCollection = Backbone.Collection.extend({
    model: app.Workout
  });

})();
