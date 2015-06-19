(function (angular) {
    "use strict";

    angular
        .module('exerciseApp')
        .controller('Exercise1Controller', ShoppingListController);

    ShoppingListController.$inject = [
        "$scope"
    ];

    function ShoppingListController($scope) {
        $scope.list = ["Apples", "Oranges", "Pears"];

        $scope.addItem = addItem;

        // Task 1
        function addItem(item) {

        }

        // Task 2
        function removeItem(item) {

        }
    }

}) (angular);