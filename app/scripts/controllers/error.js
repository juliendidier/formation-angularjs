'use strict';

angular.module('appApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('error', {
                parent: 'layout',
                url: '/error/{code}',
                views: {
                    content: {
                        controller: 'ErrorCtrl',
                        templateUrl: 'views/error.html'
                    }
                }
            })
    })

    .controller('ErrorCtrl', function ($scope, $stateParams) {
        $scope.code = $stateParams.code;
    }
);
