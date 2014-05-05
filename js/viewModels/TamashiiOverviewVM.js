// Copyright (c) 2014.
//
//     Author: EnoF (Andy Tang)
//     Version: 0.0.1

(function TamashiiOverviewVMScope(angular) {
    'use strict';

    // Load the Tamashii module.
    var app = angular.module('tamashii');

    app.viewModel('TamashiiOverviewVM', function TamashiiOverviewVM($scope, Tamashii) {
        // For now the available tamashii's is a static array of one Tamashii.
        $scope.tamashiis = [new Tamashii('Deviliho')];
    });

}(window.angular));