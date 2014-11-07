'use strict';

angular.module('appApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('live', {
                parent: 'layout',
                url: '/live',
                views: {
                    content: {
                        controller: 'LiveCtrl',
                        templateUrl: 'views/live.html'
                    }
                }
            })
        ;
    })

    .controller('LiveCtrl', function ($scope, $stateParams) {
    })
;
