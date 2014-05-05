// Copyright (c) 2014.
//
//     Author: EnoF (Andy Tang)
//     Version: 0.0.1//
//     Author: EnoF (Andy Tang)
//     Version: 0.0.1
'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        groc: {
            options: {
                out: './'
            },
            javascript: [
                'js/{,*/}*.js',
                '!**/lib/**',
                '!**/bower_components/**',
                'README.md'
            ]
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'js/{,*/}*.js',
                '!**/lib/**',
                '!**/bower_components/**'
            ]
        },
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            },
            unitAuto: {
                configFile: 'test/karma.conf.js',
                background: true
            }
        },
        less: {
            main: {
                opions: {
                    paths: [
                        ''
                    ]
                },
                files: {
                    '.tmp/main.css': 'css/main.less'
                }
            }
        },
        ngtemplates: {
            tamashii: {
                src: 'views/{,*/}*.html',
                dest: '.tmp/templates.js',
                options: {
                    url: function (url) {
                        return url.replace(/(views\/([\s\S]*?)\/)/, '').replace(/.html/, '');
                    }
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/tamashi/min.tamashi.js': [
                        'js/{,*/}*.js'
                    ]
                }
            }
        },
        version: {
            options: {
                prefix: 'Version: |\"version\": \"'
            },
            defaults: {
                src: [
                    'bower.json',
                    'js/{,*/}*.js',
                    '!**/lib/**',
                    '!**/bower_components/**'
                ]
            }
        },
        watch: {
            karma: {
                files: [
                    'js/{,*/}*.js',
                    'test/unit/{,*/}*.js'
                ],
                tasks: ['karma:unitAuto:run']
            },
            less: {
                files: [
                    'css/{,*/}*.less',
                    'views/{,*/}*.less',
                    'js/bower_components/bootstrap/less/{,*/}*.less'
                ],
                tasks: ['less:main']
            },
            ngtemplates: {
                files: ['views/{,*/}*.html'],
                tasks: ['ngtemplates']
            }
        }
    });

    grunt.registerTask('build', [
        'ngtemplates',
        'less',
        'uglify'
    ]);

    grunt.registerTask('test', [
        'build',
        'jshint',
        'karma:unit'
    ]);

    grunt.registerTask('default', [
        'karma:unitAuto',
        'watch'
    ]);
};
