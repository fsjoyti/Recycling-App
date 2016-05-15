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
            var number = $scope.resin.number;
            var location = $scope.resin.location;
            console.log(number);
            console.log(location);
            $scope.data= {number:number,location:location}
            console.log($scope.data);

            /*
            $http.get("/recycling", $scope.resin).success(function(response){
                console.log("I got the data I requested");
                $scope.recycleInfo = response;
                console.log(response);
            });
            */

            
            $http({
                url: '/recycling' ,
                method: 'GET',
                params: $scope.data
            }).then(function successCallback(response) {
                console.log(response);
               
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(response) {
                console.log("Error!");
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
            

        };

        $scope.showPopup = function() {
            $scope.popupIsVisible = true;
            $scop.textIsHidden = true;
            console.log($scope.popupIsVisible);
        };

        $scope.hidePopup = function () {
            $scope.popupIsVisible = false;
            $scope.textIsHidden = false;
            console.log($scope.popupIsVisible);
        };

    }]);