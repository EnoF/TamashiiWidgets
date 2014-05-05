// Copyright (c) 2014.
//
//     Author: EnoF (Andy Tang)
//     Version: 0.0.1//
//     Author: EnoF (Andy Tang)
//     Version: 0.0.1

(function TamashiiModel(angular, clazz) {
    'use strict';

    // Load the Tamashii module.
    var app = angular.module('tamashii');

    // Define the Tamashii Class with automatically generated Getters and Setters.
    var Tamashii = clazz(function Tamashii() {
        this.private = {
            name: {
                getSet: null
            },
            level: {
                getSet: 0
            },
            affinity: {
                getSet: 0
            },
            hunger: {
                getSet: 0
            }
        };

        // The `constructor` can set the name directly.
        this.constructor = function constructor(name) {
            this.private.name = name;
        };
    });

    // Register the class as a factory in the Tamashii module.
    app.factory('Tamashii', function TamashiiFactory() {
        return Tamashii;
    });
}(window.angular, window.clazz));