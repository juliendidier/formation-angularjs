'use strict';

angular.module('appApp')
    .controller('UsersCtrl', function ($scope, $routeParams, UserRepositories) {
        $scope.username = $routeParams.username;

        $scope.repositories = UserRepositories.list({username: $scope.username });
    })
;
