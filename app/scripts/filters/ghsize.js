'use strict';

angular.module('appApp')
    .filter('ghsize', function () {
        return function(value, size) {
            return value+(value.indexOf('?') > 0 ? '&' : '?')+'size='+size;
        }
    })
;
