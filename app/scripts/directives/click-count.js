'use strict';

angular
    .module('appApp')
    .directive('ghClickCount', function(Counter) {
        return {
            link: function($scope, element, attrs) {
                $(element).click(function() {
                    Counter.count+= Number(attrs.ghClickCount);
                    $scope.$apply();
                });
            }
        };
    })
;
