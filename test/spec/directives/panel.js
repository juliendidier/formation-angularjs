'use strict';

describe('Directive: ghPanel', function () {
    // load the controller's module
    beforeEach(module('appApp'));
    beforeEach(module('appApp.templates'));

    var $compile;
    var $scope;

    beforeEach(inject(function(_$compile_, $rootScope) {
        $compile = _$compile_;
        $scope = $rootScope.$new();
    }));

    it('Should display a panel with a title', function() {
        $scope.title = 'Hello';

        var element = $compile('<gh-panel title="title"><p>Lorem ipsum...</p></gh-panel>')($scope);

        $scope.$digest();

        expect($('.panel-heading span', element).text()).toBe('Hello');
    });
});
