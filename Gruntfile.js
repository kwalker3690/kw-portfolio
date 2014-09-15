module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: ['Gruntfile.js', 'client/**/*.js', '!client/lib/**/*.js', '!client/blog/prettify/**/*.js']
    },

    sass : {
      dist: {
        files: {
          'client/styles/style.css': 'client/styles/style.scss'
        }
      }
    }
  });


  // grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', [
  	'jshint',
    'sass'
  ]);
};