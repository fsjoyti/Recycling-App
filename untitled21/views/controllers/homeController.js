/**
 * Created by Bailey on 5/14/2016.
 */
var recycleApp = angular.module('recycleApp', []);

recycleApp.controller('InfoCtrl', ['$scope', '$http',
    function($scope, $rootScope, $http){
       $scope.getInfo() = function() {
        console.log($scope.resin);
       };
}]);