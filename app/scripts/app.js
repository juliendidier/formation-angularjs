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
    // .config(function ($stateProvider) {
    //     $stateProvider
    //     .when('/', {
    //         templateUrl: 'views/main.html',
    //         controller: 'MainCtrl'
    //     })
    //     .when('/about', {
    //         templateUrl: 'views/about.html',
    //         controller: 'AboutCtrl'
    //     })
    //     .when('/users/:username', {
    //         templateUrl: 'views/users_show.html',
    //         controller: 'UsersCtrl'
    //     })
    //     .otherwise({
    //         redirectTo: '/'
    //     });
    // })
;
