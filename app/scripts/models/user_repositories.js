'use strict';

angular.module('appApp')
    .factory('UserRepositories', function ($resource) {
        return $resource('https://api.github.com/users/:username/repos', {}, {
            list: {
                method: 'GET',
                isArray: true
            }
        });
    })
;
