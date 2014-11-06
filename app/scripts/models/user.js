'use strict';

angular.module('appApp')
    .factory('UserRepositories', function ($resource) {
        return $resource('https://api.github.com/users/:username', {}, {
            repositories: {
                url: 'https://api.github.com/users/:username/repos',
                method: 'GET',
                isArray: true
            }
        });
    })
;
