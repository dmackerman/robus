var app = app || {};

(function ($) {

  /* create our workouts collection */
  var workoutsCollection = new app.WorkoutsCollection([{
    name: 'Back and Biceps',
    slug: "back-bi",
    sets: 5,
    exercises: [{
      name: 'Deadlift',
    }, {
      name: "Upright Row"
    }]
  }, {
    name: 'Chest and Triceps',
    slug: "chest-tri",
    sets: 5,
    exercises: [{
      name: 'Deadlift',
    }, {
      name: "Upright Row"
    }]
  }, {
    name: 'Shoulders',
    slug: "shoulders",
    sets: 5,
    exercises: [{
      name: 'Deadlift',
    }, {
      name: "Upright Row"
    }]
  }, {
    name: "Legs",
    slug: "legs",
    sets: 5,
    exercises: [{
      name: 'Deadlift',
    }, {
      name: "Upright Row"
    }]
  }, {
    name: "Abs",
    slug: "abs",
    sets: 5,
    exercises: [{
      name: 'Deadlift',
    }, {
      name: "Upright Row"
    }]
  }]);

  var workoutsView = new app.WorkoutsView({ collection: workoutsCollection });

  $('.workouts-list').html(workoutsView.render().el); // adding people view in DOM.

  var addWorkout = new app.AddWorkout({ collection: workoutsCollection });

})(jQuery);
