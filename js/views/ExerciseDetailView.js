var app = app || {};

(function($) {
  'use strict';

  /* detailed view for an exercise */
  app.ExerciseDetailView = Backbone.View.extend({
    template: Handlebars.compile($('#exercise-detail-view').html()),
    events: {
      'click .button-prev': 'onClickButtonPrev',
      'click .button-add': 'onAddSetButton'
    },
    /* pass in options so we can get variables from the workouts list */
    initialize: function(options) {
      /* get our exercise name from the selected exercise */
      this.exerciseName = this.model.get('name');
      this.workout = this.model.get('workout');

      /* generate our first SetListView */
      this.setView = new app.SetListView({ model: this.model, collection: app.Sets });
    },
    render: function() {
      /* find our .content block within the template, and render the view */
      this.$el.html(this.template({ exerciseName: this.exerciseName }));
      this.$el.find('.content').html(this.setView.render().el);
      return this;
    },
    onClickButtonPrev: function() {
      var exercisesView = new app.ExercisesView({
        collection: app.Exercises,
        workout: this.workout
      });

      app.Router.renderView(exercisesView);
      this.remove();
    }
  });

})(Zepto);
