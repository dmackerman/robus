var app = app || {};

(function($) {
  'use strict';

  /* detailed view for a workout */
  app.SetListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'list sets-list',
    initialize: function() {
      /* fetch the sets that are associated with the selected exercise */
      /* if we don't have any, we generate a blank set view */

      /* we have the Exercises model, which means we have the $cid, so let's:
        - first check if there are any existing sets for this Exercise.
        - generate an array that contains the list of Sets in this Exercise
        - if not, create a new initial first set by creating a Set model and setting the "exercise" property to
            be the CID of the Exercise
      */
      console.log('name:' + this.model.get('name') + " cid: " + this.model.cid);
      this.setsInThisExercise = app.Sets.where({ exercise: this.model.cid });

    },
    render: function() {

      /* if we don't have any Sets that match this Exercise, render an initial view */
      if (this.setsInThisExercise.length == 0) {
        var setView = new app.SetView({
          model: this.model
        });
         this.$el.append(setView.render().el);

      /* otherwise, render a view containing each of the Set data */
      } else {
        alert('we have sets bitch!');
        // _.each(this.exercisesInThisWorkout, this.addExercise, this);
      }

      return this;
    },

    addSetView: function() {

    }
  });

})(Zepto);
