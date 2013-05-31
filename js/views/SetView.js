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

    },
    render: function() {
      this.$el.html(this.template());
      return this;
    },
    addSet: function() {
      /* create a new set view, and give it our set model */
      var newSetView = new app.SetView({
        model: app.Set
      });

      /* create a new Set model, and add to our Sets collection */
      var newSet = new app.Set({
        name: 'my awesome set'
        // exercise: $cid - pass the CID of the exercise here
      });

      app.Sets.create(newSet);

      /* render the set view after the current set */
      this.$el.parent().append(newSet.render().el);
    },

    /* when the user enters data into input fields, we save their set data */
    /* exercise: [{
        name: 'lah',
        sets: [
          { weight: 100, reps: 5 },
          { weight: 100, reps: 5 },
          { weight: 100, reps: 5 }
        ]
    }]*/
    saveSetData: function(event) {
      this.model.set("sets", {
        weight: $(event.target).val()
      });
      console.log(this.model);
    }

  });

})(Zepto);
