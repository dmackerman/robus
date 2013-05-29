"use strict";
module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    /* read basic information from our package file */
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner:
      '/**\n' +
      '* <%= pkg.name %>.js v<%= pkg.version %> by @fat & @mdo\n' +
      '* Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
      '* http://www.apache.org/licenses/LICENSE-2.0.txt\n' +
      '*/'
    },

    watch: {
      sass: {
        files: ['assets/sass/**/*.scss'],
        tasks: ['compass']
      },
      /* watch and see if our javascript files change, or new packages are installed */
      js: {
        files: ['js/**/*.js', '!js/app.min.js', 'components/**/*.js'],
        tasks: ['uglify']
        // tasks: ['uglify', 'jshint']
      },
      /* watch our files for change, reload */
      livereload: {
        files: ['*.html', 'assets/css/*.css', 'assets/images/*', 'assets/js/app.min.js'],
        options: {
          livereload: true
        }
      },
    },

    // compass and scss
    compass: {
      dist: {
        options: {
          config: 'config.rb',
          force: true
        }
      }
    },

    // image optimization
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'assets/images/',
          src: '**/*',
          dest: 'assets/images/'
        }]
      }
    },

    // uglify to concat & minify
    uglify: {
      dist: {
        options: {
          beautify: true
        },
        files: {
          'js/app.min.js': [
            "js/lib/modernizr.custom.15848.js",
            "js/lib/zepto.min.js",
            "js/lib/zepto.flickable.min.js",
            "components/handlebars/handlebars.js",
            "components/underscore/underscore-min.js",
            "js/lib/lodash.min.js",
            "components/backbone/backbone.js",
            "components/backbone-relational/backbone-relational.js",
            "js/lib/backbone.localstorage.js",
            "js/lib/junior.js",

            "js/models/Workout.js",
            "js/models/Exercise.js",

            "js/collections/Workouts.js",
            "js/collections/Exercises.js",

            "js/views/AddWorkout.js",
            "js/views/AddExercise.js",

            "js/views/Exercise.js",
            "js/views/ExercisesListView.js",
            "js/views/ExercisesView.js",
            "js/views/ExerciseDetailView.js",

            "js/views/Set.js",
            "js/views/SetView.js",

            "js/views/Workout.js",
            "js/views/WorkoutsListView.js",
            "js/views/WorkoutsView.js",

            "js/views/HomeView.js",

            "js/routers/Router.js",
            "js/app.js"]
        }
      }
    }

    // jshint: {
    //   all: ['js/**/*.js', '!js/**/*app.min.js']
    // }

  });

  // register task
  grunt.registerTask('default', 'watch');

};
