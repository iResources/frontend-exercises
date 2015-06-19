(function (angular) {
    "use strict";
    var dependencies = ['ngResource', 'ngSanitize', 'ngRoute', 'btford.markdown', 'ui.bootstrap'];

    angular
        .module('exerciseApp', dependencies)
        .config(ApplicationConfig)
        .controller('ApplicationController', ApplicationController);

    ApplicationConfig.$inject = ['$httpProvider', '$routeProvider'];

    function ApplicationConfig($httpProvider, $routeProvider) {

        $routeProvider
            .when('/exercise-1', {
                controller: 'Exercise1Controller',
                templateUrl: '/exercise1/setup/view.html'
            })
            .when('/exercise-2', {
                controller: 'Exercise2Controller',
                controllerAs: 'users',
                templateUrl: '/exercise2/setup/view.html'
            })
            .when('/exercise-3', {
                controller: 'Exercise3Controller',
                controllerAs: 'exercise3',
                templateUrl: '/exercise3/setup/view.html'
            })
            .when('/exercise-4', {
                controller: 'Exercise4Controller',
                controllerAs: 'exercise4',
                templateUrl: '/exercise4/setup/view.html'
            })
            .when('/', {
                templateUrl: '/intro/intro.html'
            })
            .otherwise('/');
    }    

    function ApplicationController() {
        this.name = "iResources | Exercises";
    }

}) (angular);