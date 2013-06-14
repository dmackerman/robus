var app = app || {};

(function($) {
  'use strict';

  /* detailed view for a workout */
  app.SetListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'list sets-list',
    initialize: function() {
      this.setsInThisExercise = app.Sets.where({ exercise: this.model.cid });
    },

    render: function() {
      /*  if we don't have any Sets that match this Exercise:
            - create a new Set model, and associate it with teh Exercise
            - this.model contains our CID for the Exercise, so we'll pass it to the individual set view
            - render the initial view */
      if (this.setsInThisExercise.length == 0) {

        /* when we don't ahve any existing sets, we need to create one */

        /* create the model */
        var newSet = new app.Set({
          weight: 0,
          reps: 0,
          exercise: this.model.cid
        });

        var setView = new app.SetView({
          model: newSet
        });

        /* render an initial empty SetView */
        this.$el.append(setView.render().el);

      /* otherwise, render a view containing each of the Set data */
      } else {
        _.each(this.setsInThisExercise, this.addSetView, this);
      }

      return this;
    },

    addSetView: function(set) {
      /* for every Set that's in the Exercise, we create the view and pass it's data */
      /* create an individual SetView */
      var setView = new app.SetView({
        model: set,
        weight: set.get('weight'),
        reps: set.get('reps')
      });

      this.$el.append(setView.render().el);
    }
  });

})(Zepto);
