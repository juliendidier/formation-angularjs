'use strict';

angular
    .module('appApp')
    .directive('ghPanelContainer', function(Counter) {
        return {
            templateUrl: 'views/directives/panel-container.html',
            transclude: true,
            restrict: 'E',
            controller: function ($scope) {
                $scope.panels = [];
                this.addPanel = function(scope) {
                    $scope.panels.push(scope);
                }
            }
        };
    })
;
