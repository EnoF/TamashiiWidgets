// Copyright (c) 2014.
//
//     Author: EnoF (Andy Tang)
//     Version: 0.0.1//
//     Author: EnoF (Andy Tang)
//     Version: 0.0.1

(function tamashiiOverview(angular) {
    'use strict';

    var app = angular.module('tamashii');

    // This directive will bind the `tamashiiOverview.html` with the `TamashiiOverviewVM`.
    app.directive('tamashiiOverview', function tamashiiOverviewDirective() {
        return {
            controller: 'TamashiiOverviewVM',
            scope: {},
            restrict: 'A',
            templateUrl: 'tamashiiOverview'
        };
    });

}(window.angular));