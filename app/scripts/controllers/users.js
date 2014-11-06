'use strict';

angular.module('appApp')
    .config(function ($stateProvider) {
        $stateProvider
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
            .state('user_show', {
                parent: 'layout',
                url: '/users/:username',
                views: {
                    content: {
                        controller: 'UsersCtrl',
                        templateUrl: 'views/users_show.html'
                    }
                }
            })
        ;
    })

    .controller('UsersCtrl', function ($scope, $stateParams, User, UserRepositories) {
        $scope.username = $stateParams.username;
        $scope.isLoading = true;
        $scope.isError = false;

        $scope.user = User.get({
            username: $scope.username,
            access_token: 'a46b2cade104ac6710e641571ac398d23a75347d'
        });

        $scope.repositories = UserRepositories.get({
            username: $scope.username,
            access_token: 'a46b2cade104ac6710e641571ac398d23a75347d'
        }, function () {
            $scope.isLoading = false;
        }, function () {
            $scope.isError = true;
        });
    })
;
