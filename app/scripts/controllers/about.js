'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appApp
 */
angular.module('appApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('about', {
                parent: 'layout',
                url: '/about',
                views: {
                    content: {
                        templateUrl: 'views/about.html',
                        controller: 'AboutCtrl'
                    }
                }
            })
        ;
    })

  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
