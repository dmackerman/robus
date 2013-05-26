var app = app || {};

(function($) {
  'use strict';

  /* the container view that contains the child view: app.WorkoutsListView */
  app.WorkoutsView = Jr.View.extend({
    template: Handlebars.compile($('#workouts-view').html()),
    initialize: function() {
      /* initialize the container view for the list of workouts and pass it our collection */
      this.workoutsListView = new app.WorkoutsListView({ collection: new app.WorkoutsCollection() });
    },
    render: function() {
      this.$el.html(this.template());
      /* find our .content block within the template, and render the view */
      this.$el.find('.content').html(this.workoutsListView.render().el);
      return this;
    }
  });

})(Zepto);
