'use strict';

angular
    .module('appApp')
    .directive('ghRepository', function() {
        return {
            templateUrl: 'views/directives/repository.html',
            restrict: 'E',
            scope: {
                repository: '=repository'
            }
        };
    })
;
