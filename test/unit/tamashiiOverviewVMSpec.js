// Copyright (c) 2014.
//
//     Author: EnoF (Andy Tang)
//     Version: 0.0.1//
//     Author: EnoF (Andy Tang)
//     Version: 0.0.1

(function tamashiiOverviewVMSpec() {
    'use strict';

    describe('tamashiiOverview View Model specs', function tamashiiOverviewVMSpecSuit() {
        var scope;

        beforeEach(module('tamashii'));

        beforeEach(inject(function prepareTamashiVM($rootScope, $controller) {
            scope = $rootScope.$new();
            $controller('TamashiiOverviewVM', {
                $scope: scope
            });
        }));

        it('should contain a list of tamashi to display', function tamashiList() {
            expect(scope.tamashiis instanceof Array).toEqual(true);
        });
    });
}());