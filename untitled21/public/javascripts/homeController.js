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

            
            $http({
                url: '/recycling' ,
                method: 'GET',
                params: $scope.data
            }).then(function successCallback(response) {
                console.log(response)
                $scope.info = response.data.find(location);
                console.log($scope.info);
                if (response.data.length > 0) {
                    $scope.result = "Yes, you CAN recycle this in your zip code!";
                }
                else {
                    $scope.result = "No, sorry, your zip code does not recycle this RIC";
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