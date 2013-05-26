'use strict';
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
        files: ['js/**/*.js', 'components/**/*.js'],
        tasks: ['uglify']
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
        files: {
          'js/app.min.js': [
            "components/jquery/jquery.min.js",
            "components/handlebars/handlebars.js",
            "components/underscore/underscore-min.js",
            "components/backbone/backbone-min.js",
            "js/models/Workout.js",
            "js/collections/Workouts.js",
            "js/routers/Router.js",
            "js/views/AddWorkout.js",
            "js/views/Workout.js",
            "js/views/WorkoutDetail.js",
            "js/views/Workouts.js",
            "js/app.js"]
        }
      }
    },

  });

  // register task
  grunt.registerTask('default', 'watch');

};
