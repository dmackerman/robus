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
      'click .delete-set': 'deleteSet',
      'keyup .set-data': 'saveSetData',
    },
    initialize: function() {
      this.listenTo(this.model, 'change', this.thingChange);
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    thingChange: function() {
      console.log('i changed');
    },

    deleteSet: function(set) {
      this.model.destroy();
      // console.log('delete me ' + this.model.cid);
    },

    addSet: function(set) {
      /*
        when the user adds a new set we:
          - create a new Set model with some default values, and associate the exercise property to the cid of the exercise
          - add this set to our Sets collection

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

      /* set the new values, making sure we're setting the right ones based on the
        cid of the model, which we've passed to the template as an ID */

      if (field == "weight") {
        this.model.set({ weight: $('#'+this.model.cid+' input[name=weight]').val() });
      }

      if (field == "reps") {
        this.model.set({ reps: $('#'+this.model.cid+' input[name=reps]').val() });
      }

      /* save our model to localStorage */
      this.model.save();

    }

  });

})(Zepto);
