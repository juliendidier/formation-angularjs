'use strict'

angular.module('appApp')
    .run(function($rootScope, $state) {
        $rootScope.$on('$stateChangeError',
            function(event, toState, toParams, fromState, fromParams, error) {
                $state.go('error', {code: error.status});
            }
        )
    })
;
