'use strict';

angular.module('appApp')
    .controller('UsersCtrl', function ($scope, $routeParams) {
        $scope.username = $routeParams.username;
    });
