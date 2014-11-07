'use strict';

describe('Filters: ghSize', function () {
    // load the controller's module
    beforeEach(module('appApp'));

    var ghsize;

    beforeEach(inject(function($filter) {
        ghsize = $filter('ghsize');
    }));

    it('Should display image with a size', function() {
        expect(ghsize('foo', 100)).toBe('foo?size=100');
    });

    it('Should display image with a size', function() {
        expect(ghsize('foo?test', 100)).toBe('foo?test&size=100');
    });
});
