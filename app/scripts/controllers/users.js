'use strict';

angular.module('appApp')
    .controller('UsersCtrl', function ($scope, $routeParams, UserRepositories) {
        $scope.username = $routeParams.username;
        $scope.isLoading = true;
        $scope.isError = false;

        $scope.repositories = UserRepositories.list({username: $scope.username }, function () {
            $scope.isLoading = false;
        }, function () {
            $scope.isError = true;
        });
    })
;
