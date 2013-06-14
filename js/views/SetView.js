var app = app || {};

(function($) {
  'use strict';

  /* detailed view for a workout */
  app.SetView = Backbone.View.extend({
    tagName: 'li',
    className: 'set',
    template: Handlebars.compile($('#set-item').html()),
    events: {
      'click .add-set': 'addSet',
      'keyup .set-data': 'saveSetData',
    },
    initialize: function() {
      // console.log(this.model);
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    addSet: function(set) {
      /*
        when the user adds a new set we:
          - create a new Set model with some default values, and associate the exercise property to the cid of the exercise
          - add this set to our Sets collection

      */

      /* create the model */
      var newSet = new app.Set({
        weight: 0,
        reps: 0,
        exercise: this.model.get('exercise')
      });

      /* add it to the Sets collection */
      app.Sets.create(newSet);

      /* create a new set view, and give it our set model */
      var newSetView = new app.SetView({
        model: newSet
      });

      /* render the set view after the current set */
      this.$el.parent().append(newSetView.render().el);
    },

    /* when the user enters data into input fields (keyup), we save their set data */
    saveSetData: function(event) {

      /* TODO: make this smarter because I coded it on a plane */

      /* first, determine which field they're entering data into, and store the value */
      var field = event.target.name;
      var value = $(event.target).val();

      // /* set the new values */
      this.model.set({
        weight: $('input[name=weight]').val(),
        reps: $('input[name=reps]').val(),
        exercise: this.model.get('exercise')
      })

      console.log(this.model);




    }

  });

})(Zepto);
