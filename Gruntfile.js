module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: ['Gruntfile.js', 'client/**/*.js', '!client/lib/**/*.js', '!client/blog/prettify/**/*.js']
    },

    sass : {
      dist: {
        options: {
          loadPath: require('node-bourbon').includePaths,
          style: 'expanded',
          require: 'susy'
        },
        files: {
          'client/style.css': 'client/styles/style.scss'
        }
      }
    },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    }
  });


  // grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('dev', function (target) {
    // Running nodejs in a different process and displaying output on the main console
    var nodemon = grunt.util.spawn({
         cmd: 'grunt',
         grunt: true,
         args: 'nodemon'
    });
    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);

    grunt.task.run([ 'watch' ]);
  });

  grunt.registerTask('default', [
  	'jshint',
    'sass'
  ]);

  grunt.registerTask('build', [
    'sass'
  ]);
};
