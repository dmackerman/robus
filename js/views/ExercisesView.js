var app = app || {};

(function($) {
  'use strict';

  /* the container view that contains the child view: app.WorkoutsListView */
  app.ExercisesView = Jr.View.extend({
    template: Handlebars.compile($('#exercises-view').html()),
    events: {
      'click .button-prev': 'onClickButtonPrev',
      'click .button-add': 'onClickButtonAdd'
    },

    /* pass in options so we can get variables from the workouts list */
    initialize: function(options) {
      /* initialize the container view for the list of workouts and pass it our collection */
      /* and fetch the data from our collection (which is in localStorage) */
      var that = this;
      that.workoutName = options.workout;
      app.Exercises.fetch({
        success: function() {
          that.exercisesListView = new app.ExercisesListView({
            collection: app.Exercises,
            workout: that.workoutName
          });
        }
      });
    },
    render: function() {
      this.$el.html(this.template({ workoutName: this.workoutName }));
      /* find our .content block within the template, and render the view */
      this.$el.find('.content').html(this.exercisesListView.render().el);
      return this;
    },
    onClickButtonPrev: function() {
      var workoutsView = new app.WorkoutsView();
      app.Router.renderView(workoutsView);
    },
    onClickButtonAdd: function() {
      var addExerciseView = new app.AddExerciseView({
        workout: this.workoutName,
        collection: app.Exercises
      });
      app.Router.renderView(addExerciseView);
    }
  });

})(Zepto);
