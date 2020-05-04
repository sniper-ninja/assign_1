(function () {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
        LunchCheckController.$inject = ['$scope', '$filter'];
        function LunchCheckController($scope, $filter) {
            $scope.name = "dal,roti,burger";//set input fields
            $scope.msg = "";
    
            // call dispaly function
            $scope.display = function () {
                var result = checkMeals($scope.name);
                $scope.msg = result;
            };
    
    // this function will check if input i.e empty else count -> display -> show message with color change
            function checkMeals(string) {
    
                var msg_state = "";
                var stringlength = string.length;// store length of text fileds
                if (stringlength > 0) {
                    var len = string.split(',').length;
                    $scope.txtcolor = {
                        "color": "green",
                        "padding": "5px",
                        "border":"1px solid green"
                    }
                    if (len <= 3) {
                        msg_state = "Enjoy!";
                    } else {
    
                        msg_state = "Too Much!";
                    }
                    return msg_state;
                } else {
                    $scope.txtcolor = {
                        "color": "red",
                        "padding": "5px",
                        "border":"1px solid red"
                    }
                    msg_state = "Please enter data!";
                    return msg_state;
                }
    
            };
    
    
        }
    })();