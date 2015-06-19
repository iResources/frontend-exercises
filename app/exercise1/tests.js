describe('Exercise 1', function () {
    var controller, $scope;

    beforeEach(module('exerciseApp'));
    beforeEach(inject(function ($controller, _$rootScope_) {
        $scope = _$rootScope_.$new();
        var controller = $controller('Exercise1Controller', {
            $scope: $scope
        });
    }));

    /*
        Insert any unit tests here.
     */
    describe('addItem', function () {
        it('exists', function () {
            expect(angular.isFunction($scope.addItem)).toBe(true);
        });
    });

})