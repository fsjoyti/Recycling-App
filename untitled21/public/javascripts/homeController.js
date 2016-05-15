/**
 * Created by Bailey on 5/14/2016.
 */
var recycleApp = angular.module('recycleApp', ['angularModalService']);

recycleApp.controller('InfoCtrl', ['$scope', '$http',

    function($scope, $http){
        console.log("Inside the controller");

        $scope.resins = [1, 2, 3, 4, 5, 6, 7];

        $scope.getInfo = function(){
            console.log($scope.resin);
            var number = $scope.resin.number;
            var location = $scope.resin.location;
            console.log(number);
            console.log(location);
            $scope.data= {number:number,location:location}
            console.log($scope.data);

            
            $http({
                url: '/recycling' ,
                method: 'GET',
                params: $scope.data
            }).then(function successCallback(response) {
                console.log(response);
                if (response.data != null) {
                    $scope.centerAddress = response.data.location[0];
                    console.log(response.data.location[0]);
                    $scope.searchPass="true";
                    $scope.searched="true"
                }
                else {
                    $scope.searchPass="";
                    $scope.searched="true";
                }
            }, function errorCallback(response) {
                console.log("Error!");
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