(function() {

  window.App = {
    Model: {},
    Collection: {},
    View: {}
  }

  /* model */
  App.Model.Workout = Backbone.Model.extend({});

  /* collection */
  App.Collection.WorkoutsCollection = Backbone.Collection.extend({
    model: App.Model.Workout
  });

  // View for all the workouts
  App.View.WorkoutsView = Backbone.View.extend({
    el: $('.workout-list'),
    tagName: 'ul',
    render: function() {
      /* go through the collection and render a view for each workout item */
      this.collection.each(function(workout) {
        var workoutView = new App.View.WorkoutView({
          model: workout
        });
        this.$el.append(workoutView.render().el); // adding all the person objects.
      }, this);
      return this;
    }
  });

  // View for a single workout
  App.View.WorkoutView = Backbone.View.extend({
    tagName: 'li',
    // template: Handlebars.compile( $("workout-item").html()),
    template: _.template($('#workout-item').html()),
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this; // returning this from render method..
    }
  });


  var workoutsCollection = new App.Collection.WorkoutsCollection([{
    name: 'Back and Biceps'
  }, {
    name: 'Chest and Triceps'
  }, {
    name: 'Shoulders'
  }, {
    name: "Legs"
  }, {
    name: "Abs"
  }]);

  var workoutsView = new App.View.WorkoutsView({
    collection: workoutsCollection
  });
  $('.appView').append(workoutsView.render().el); // adding people view in DOM.

})();

