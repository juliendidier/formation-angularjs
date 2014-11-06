'use strict'

angular.module('appApp')
    .run(function($rootScope) {
        $rootScope.$on('$stateChangeError',
            function(event, toState, toParams, fromState, fromParams, error) {
                console.log(error);
            }
        )
    })
;
