var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', function ($scope) {
    $scope.myValue = 'Hello';
});

myApp.filter('myFilter', function () {
    return function (value) {
        return value + ' world!';
    };
});