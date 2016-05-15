/**
 * Created by Bailey on 5/14/2016.
 */
var recycleApp = angular.module('recycleApp', []);

recycleApp.controller('InfoCtrl', ['$scope', '$http',

    function($scope, $http){
        console.log("Inside the controller");

        $scope.resins = [1, 2, 3, 4, 5, 6, 7];

        $scope.getInfo = function(){
            console.log($scope.resin);
        };

    }]);