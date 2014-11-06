'use strict';

angular.module('appApp')
    .factory('User', function ($resource) {
        return $resource('https://api.github.com/users/:username', {}, {
            get: {
                method: 'GET'
            }
        });
    })
    .factory('UserRepositories', function ($resource) {
        return $resource('https://api.github.com/users/:username/repos', {}, {
            get: {
                method: 'GET',
                isArray: true
            }
        });
    })
    .factory('Repository', function ($resource) {
        return $resource('https://api.github.com/repos/:username/:repository', {}, {
            get: {
                method: 'GET'
            }
        });
    })
;
