var app = app || {};

(function($) {
  'use strict';

  /* detailed view for a workout */
  app.SetView = Backbone.View.extend({
    tagName: 'ul',
    className: 'list sets-list',
    initialize: function() {

    },
    render: function() {
      /* render an initial set view, refactor this once we have data in here to  */
      var setView = new app.Set({ model: this.model });
      this.$el.append(setView.render().el);
      return this;
    }
  });

})(Zepto);
