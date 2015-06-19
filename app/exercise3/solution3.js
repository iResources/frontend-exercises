(function (angular) {
    "use strict";

    angular
        .module('exerciseApp')
        .factory('externalService', externalService)
        .controller('Exercise3Controller', Exercise3Controller);

    Exercise3Controller.$inject = [
        "$scope",
        "externalService"
    ];

    function Exercise3Controller($scope, externalService) {
        var vm = this;
        
        externalService.getMessage(setMessage);

        // Modify only this function.  
        // For some reason this isn't updating the view consistently.
        function setMessage(message) {
            vm.message = message;
        }
    }

    /**
     * Analyse but do not change the following.
     */
    function externalService() {
        return {
            getMessage: function (cb) {
                if (angular.isFunction(cb)) {
                    window.setTimeout(function () {
                        cb.call(null, "Phil Taylor hits 180's for fun.")
                    }, 100);
                } else {
                    throw TypeError("External Service: Callback parameter is not a function");
                }
            }
        }
    }

}) (angular);