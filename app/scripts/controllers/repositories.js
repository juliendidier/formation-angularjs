'use strict';

angular.module('appApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('repository_show', {
                parent: 'user_show',
                url: '/repositories/:repository',
                views: {
                    'content@layout': {
                        controller: 'RepositoriesCtrl',
                        templateUrl: 'views/repositories_show.html'
                    }
                }
            })
        ;
    })

    .controller('RepositoriesCtrl', function ($scope, $stateParams, Repository, user) {
        $scope.isLoading = true;
        $scope.isError = false;

        $scope.user = user;
        $scope.repository = Repository.get({
            username: $stateParams.username,
            repository: $stateParams.repository,
            'access_token': 'a46b2cade104ac6710e641571ac398d23a75347d'
        }, function () {
            $scope.isLoading = false;
        }, function () {
            $scope.isError = true;
        });
    })
;
