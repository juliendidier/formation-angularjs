'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
    .module('appApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ngTouch'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('layout', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: 'views/layout.html'
                    },
                    'header@layout': {
                        controller: function ($scope, Counter) {
                            $scope.counter = Counter;
                        }
                    }
                }
            })
        ;

        $urlRouterProvider
            .otherwise('/error/404')
        ;
    })
;
