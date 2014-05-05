// Copyright (c) 2014.
//
//     Author: EnoF (Andy Tang)
//     Version: 0.0.1

(function appScope(angular) {
    'use strict';

    // Tamashii Widgets module.
    var app = angular.module('tamashii', []);

    // We use the MVVM pattern, rather than the MVC pattern.
    app.viewModel = app.controller;

}(window.angular));