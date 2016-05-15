/**
 * Created by Bailey on 5/14/2016.
 */
var recycleApp = angular.module('recycleApp', []);

recycleApp.controller('InfoCtrl', ['$scope', '$http',
    function($scope, $http){

        var getInfo = function(){
            console.log($scope.resin);
        }

    }]);