var myApp = angular.module('myApp', []);

myApp.controller('mainCtrl', function ($scope) {
    $scope.myFunc = function () {
        alert("mainCtrl");
    }
});

myApp.controller('innerCtrl1', function ($scope) {
    $scope.myFunc = function () {
        alert("innerCtrl1");
    }
});

myApp.controller('innerCtrl2', function ($scope) {
});