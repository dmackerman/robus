var app = app || {};

(function($) {
  'use strict';

  /* detailed view for a workout */
  app.SetView = Backbone.View.extend({
    tagName: 'ul',
    className: 'list inset',
    initialize: function() {

    },
    render: function() {
      /* render an initial set view */
      var setView = new app.Set({ model: this.model });
      this.$el.append(setView.render().el);
      return this;
    }
  });

})(Zepto);
