var app = app || {};

(function() {
  'use strict';

  /* collection */
  app.WorkoutsCollection = Backbone.Collection.extend({
    url: './data/workouts.json',
    model: app.Workout,
    initialize: function() {
      this.fetch();
    }
  });

})();
