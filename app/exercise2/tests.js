describe('Exercise 2 - Users Controller', function () {
    var controller, $scope, $httpBackend;
    beforeEach(module('exerciseApp'));
    beforeEach(inject(function ($controller, _$rootScope_, _$httpBackend_) {
        $scope = _$rootScope_.$new();
        $httpBackend = _$httpBackend_;

        controller = $controller('Exercise2Controller');
        $httpBackend.when('GET', /users/ig).respond(200, [{ forename: "Will", surname:"Snowdon"}]);
    }));

    /*
        Insert your tests after this point.  The first one is done for you.

        https://docs.angularjs.org/api/ngMock/service/$httpBackend
     */

    it('fires an initial request for users', function () {
        $httpBackend.expectGET(/users/ig);
        $httpBackend.flush();
    });

});