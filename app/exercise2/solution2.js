(function (angular) {
    "use strict";

    angular
        .module('exerciseApp')
        .factory('users', UsersService)
        .controller('Exercise2Controller', UsersController);

    UsersController.$inject = [
        "users"
    ];

    function UsersController(users) {
        var vm = this;

        vm.userList;

        // Task 1 - Implement get users
        function getUsers() {
            
        }
    }

    // You may use either $http or $resource to handle server request
    UsersService.$inject = [
        '$http',
        '$resource'
    ];

    function UsersService($http, $resource) {
        // Return an object to be used for requests
        return {};
    }

}) (angular);