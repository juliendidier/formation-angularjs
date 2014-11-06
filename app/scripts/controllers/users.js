'use strict';

angular.module('appApp')
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
