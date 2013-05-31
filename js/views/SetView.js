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
      'keypress .set-data': 'saveSetData',
    },
    initialize: function() {
      console.log(this.model);
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    addSet: function() {

      /*
        when the user adds a new set we:
          - create a new Set model with some default values, and associate the exercise property to the cid of the exercise
          - add this set to our Sets collection

      */

      /* create the model */
      var newSet = new app.Set({
        weight: 0,
        reps: 0,
        exercise: this.model.cid
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

    /* when the user enters data into input fields, we save their set data */
    saveSetData: function(event) {
      // this.model.set("sets", {
      //   weight: $(event.target).val()
      // });
      // console.log(this.model);
    }

  });

})(Zepto);
