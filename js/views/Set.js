var app = app || {};

(function($) {
  'use strict';

  /* detailed view for a workout */
  app.Set = Backbone.View.extend({
    tagName: 'li',
    className: 'set',
    template: Handlebars.compile($('#set-item').html()),
    events: {
      'click .add-set': 'addSet',
    },
    initialize: function() {

    },
    render: function() {
      this.$el.html(this.template());
      /* prepend a divider before the set list item */
      return this;
    },
    addSet: function() {
      var newSet = new app.Set();
      this.$el.parent().append(newSet.render().el);
    }

  });

})(Zepto);
