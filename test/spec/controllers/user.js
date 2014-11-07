'use strict';

describe('Controller: UsersCtrl', function () {

    // load the controller's module
    beforeEach(module('appApp'));

    var UsersCtrl;
    var scope;
    var UserRepositories;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $stateParams, _UserRepositories_) {
        UserRepositories = _UserRepositories_;
        scope = $rootScope.$new();
        spyOn(UserRepositories, 'get').and.returnValue([]);

        $stateParams.username = 'foo';

        UsersCtrl = $controller('UsersCtrl', {
            $scope: scope,
            user: {}
        });
    }));

    it('UsrCtrl should set the isLoading attribute on true', function () {
        expect(scope.isLoading).toBe(true);    
    });

    it('UsersCtrl have to call `get`', function() {
        expect(UserRepositories.get).toHaveBeenCalled();
        var call = UserRepositories.get.calls.mostRecent();
        var args = call.args;

        expect(args[0].username).toBe('foo');

        var callback = args[1];

        expect(scope.isLoading).toBe(true);
        callback();
        expect(scope.isLoading).toBe(false);
        expect(scope.repositories).not.toBeNull();
        expect(scope.repositories.length).toBeDefined();
    });
});
