var myApp = angular.module('myApp', []);

myApp.controller('myCtrl_1', function ($scope, myFact) {
    $scope.myValue = 'value_1';
    $scope.fact = myFact;
});

myApp.controller('myCtrl_2', function ($scope, myFact) {
    $scope.myValue = 'value_2';
    $scope.fact = myFact;
});

myApp.factory('myFact', function () {
    myVal = 'v';
    return {
        fact : myVal
    }
});