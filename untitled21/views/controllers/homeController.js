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
            $http.get("/recycling", $scope.resin).success(function(response){
                console.log("I got the data I requested");
                $scope.recycleInfo = response;
                console.log(response);
            });
        };

        $scope.showPopup = function() {
            $scope.popupIsVisible = true;
            console.log($scope.popupIsVisible);
        };

        $scope.hidePopup = function () {
            $scope.popupIsVisible = false;
            console.log($scope.popupIsVisible);
        };

    }]);