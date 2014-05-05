// Copyright (c) 2014.
//
//     Author: EnoF (Andy Tang)
//     Version: 0.0.1
module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '..',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            // Angular dependencies
            'js/bower_components/angular/angular.js',
            'js/bower_components/angular-mocks/angular-mocks.js',
            // App wiring
            'js/app.js',
            // EnoFJS dependency
            'js/bower_components/enofjs/src/*.js',
            // Models
            'js/models/**/*.js',
            // View Models
            'js/viewModels/**/*.js',
            // Views encapsuled in widgets
            'js/widgets/**/*.js',
            // Templates for the widgets
            '.tmp/templates.js',
            // The specs for unit testing
            'test/unit/**/*.js'
        ],

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 5050,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // coverage reporter generates the coverage
        reporters: ['progress', 'coverage', 'growl'],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'app/models/**/*.js': ['coverage'],
            'app/modules/**/*.js': ['coverage'],
            'app/viewModels/**/*.js': ['coverage']
        },

        // optionally, configure the reporter
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
