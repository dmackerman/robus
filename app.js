/* model */
Workout = Backbone.Model.extend({});

/* collection */
var WorkoutsCollection = Backbone.Collection.extend({
  model: Workout
});

// View for all the workouts
var WorkoutsView = Backbone.View.extend({
  el: $('.workout-list'),
  tagName: 'ul',
  initialize: function() {
    console.log(this.collection);
  },
  render: function() {
    this.collection.each(function(workout) {
      var workoutView = new WorkoutView({ model: workout });
      this.$el.append(workoutView.render().el); // adding all the person objects.
    }, this);
    return this;
  }
});

// View for a single workout
var WorkoutView = Backbone.View.extend({
  tagName: 'li',
  // template: Handlebars.compile( $("workout-item").html()),
  template: _.template($('#workout-item').html()),
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;  // returning this from render method..
  }
});


var workoutsCollection = new WorkoutsCollection([{
  name: 'Mohit Jain',
  age: 26
}, {
  name: 'Taroon Tyagi',
  age: 25,
  occupation: 'web designer'
}, {
  name: 'Rahul Narang',
  age: 26,
  occupation: 'Java Developer'
}]);

var workoutsView = new WorkoutsView({ collection: workoutsCollection });
$('.appView').append(workoutsView.render().el);   // adding people view in DOM.
