'use strict';

angular
    .module('appApp')
    .directive('ghPanel', function($state) {
        return {
            require: [
                '?^ghPanelContainer'
            ],
            templateUrl: 'views/directives/panel.html',
            transclude: true,
            restrict: 'E',
            scope: {
                title: '=',
                hrefState: '@',
                hrefStateParams: '='
            },
            link: function($scope, element, attrs, controllers) {
                var panelDirective = controllers[0];

                // panelDirective.name()
                if (panelDirective != undefined) {
                    panelDirective.addPanel($scope);
                }

                if ($scope.hrefState) {
                    $scope.href = $state.href($scope.hrefState, $scope.hrefStateParams);
                }
            }
        };
    })
;
