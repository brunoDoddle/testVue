// Chercher à comprebdre le production mode dans  grunt ??

// Uglify pour minimifier le code js...How does it marche ??
// Super utilise pour mise en place grunt: https://semaphoreci.com/community/tutorials/getting-started-with-grunt-js

module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      bundle: {
        src: 'src/main.js',
        dest: 'main.js'
      },
      options: {
        browserifyOptions: {
          debug: true
        },
        transform: [
          ['vueify']
        ]
      }
    },env: {
      prod: {
          NODE_ENV: 'production'
      }
    },
    uglify: {
      build:{
        files: {
          'main.min.js' : ['main.js']
        }
      } 
    },
    sass: {
      dev: {    // indicates that it will be used only during development
        files: {
          // destination     // source file
          'src/css/main.css': 'src/scss/main.scss'
        }
      }
    },
    cssmin: {
        build: {
          src: 'src/css/main.css',
          dest: 'css/main.min.css'
        }
      },
  });

  //Tache que l'ont vas utiliser
  grunt.loadNpmTasks('grunt-env');  // A pas l'air de marcher ???
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat'); // A voir utilité ??

  // commande grunt déclaré > ex: grunt build
  grunt.registerTask("default", ["browserify"]);
  grunt.registerTask("css", ["sass","cssmin"]);
  grunt.registerTask("min", [ "uglify"]);
  grunt.registerTask("build", ["env","browserify","sass","cssmin"]); //,"uglify"]);
};