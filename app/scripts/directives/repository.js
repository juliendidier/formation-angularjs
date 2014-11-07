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
    .directive('ghPanel', function($state) {
        return {
            templateUrl: 'views/directives/panel.html',
            transclude: true,
            restrict: 'E',
            scope: {
                title: '=',
                hrefState: '@',
                hrefStateParams: '='
            },
            link: function($scope, element, attrs, controllers) {
                if ($scope.hrefState) {
                    $scope.href = $state.href($scope.hrefState, $scope.hrefStateParams);
                }
            }
        };
    })
;
