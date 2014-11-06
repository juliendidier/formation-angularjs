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
    .config(function ($urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/')
        ;
    })
;
