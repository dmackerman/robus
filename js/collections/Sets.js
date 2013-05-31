var app = app || {};

(function() {
  'use strict';

  /* collection */
  app.SetsCollection = Backbone.Collection.extend({
    model: app.Workout,
    localStorage: new Backbone.LocalStorage("Sets")
  });

  /* create the collection */
  app.Sets = new app.WorkoutsCollection();

})();
