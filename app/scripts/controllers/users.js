'use strict';

angular.module('appApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('layout', {
                templateUrl: 'views/layout.html',
                abstract: true
            })
            .state('home', {
                parent: 'layout',
                url: '/',
                views: {
                    content: {
                        controller: 'MainCtrl',
                        templateUrl: 'views/main.html'
                    }
                }
            })
        ;
    })

    .controller('UsersCtrl', function ($scope, $routeParams, UserRepositories) {
        $scope.username = $routeParams.username;
        $scope.isLoading = true;
        $scope.isError = false;

        $scope.repositories = UserRepositories.repositories({
            username: $scope.username,
            access_token: 'a46b2cade104ac6710e641571ac398d23a75347d'
        }, function () {
            $scope.isLoading = false;
        }, function () {
            $scope.isError = true;
        });
    })
;
