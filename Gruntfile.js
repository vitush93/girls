module.exports = function (grunt) {

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    require('time-grunt')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch: {
            js: {
                files: ['dev/js/**/*.js'],
                tasks: ['browserify']
            },
            handlebars: {
                files: ['dev/templates/**/*.{hbs,handlebars}'],
                tasks: ['handlebars']
            }
        },

        // all handlebars template files will be compiled into single ./public/js/templates.js
        handlebars: {
            compile: {
                options: {
                    node: true,
                    wrapped: true,
                    namespace: 'App.Templates',
                    partialsUseNamespace: true,
                    processName: function (path) {
                        return path.split('/').pop().split('.')[0];
                    }
                },
                files: {
                    "dev/js/templates.js": "dev/templates/**/*.{hbs,handlebars}"
                }
            }
        },

        browserify: {
            dist: {
                files: {
                    './js/bundle.js': ['./dev/js/main.js']
                }
            }
        }
    });

    grunt.registerTask('default', [
        'handlebars',
        'browserify',
        'watch'
    ]);

};
