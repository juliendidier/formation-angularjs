'use strict';

angular.module('appApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('index', {
                url: '',
                controller: function($state) {
                    $state.go('home');
                }
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
            .state('user_show', {
                parent: 'layout',
                url: '/users/:username',
                views: {
                    content: {
                        controller: 'UsersCtrl',
                        templateUrl: 'views/users_show.html'
                    }
                },
                resolve: {
                    user: function ($stateParams, User, $q) {
                        var deferred = $q.defer();
                        var user = User.get({
                            username: $stateParams.username,
                            'access_token': 'a46b2cade104ac6710e641571ac398d23a75347d'
                        }, function() {
                            deferred.resolve(user);
                        }, function(httpResponse) {
                            deferred.reject(httpResponse);
                        });

                        return deferred.promise;
                    }
                },
                data: {
                    resolveError: function(params) {
                        return 'User "'+params.username+'" not found';
                    }
                }
            })
        ;
    })

    .controller('UsersCtrl', function ($scope, $stateParams, user, UserRepositories) {
        $scope.isLoading = true;
        $scope.isError = false;

        $scope.user = user;

        $scope.repositories = UserRepositories.get({
            username: $stateParams.username,
            'access_token': 'a46b2cade104ac6710e641571ac398d23a75347d'
        }, function () {
            $scope.isLoading = false;
        }, function () {
            $scope.isError = true;
        });
    })
;
