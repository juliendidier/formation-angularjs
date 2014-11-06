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
                templateUrl: 'views/layout.html',
                abstract: true
            })
        ;

        $urlRouterProvider
            .otherwise('/error/404')
        ;
    })
;
