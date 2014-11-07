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
    .directive('ghPanel', function() {
        return {
            templateUrl: 'views/directives/panel.html',
            transclude: true,
            restrict: 'E',
            scope: {
                title: '=title'
            }
        };
    })
;
