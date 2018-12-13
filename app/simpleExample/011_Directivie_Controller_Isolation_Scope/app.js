var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', function ($scope) {
    $scope.myValue1 = 'value1';
    $scope.myValue2 = 'value2';
    $scope.myFunction = function () {
        console.log("click");
    };
    $scope.myValue3 = '111'
    console.log($scope.myValue3);
});

myApp.directive('myDirective', function () {
    return {
        scope: {
            myValue1: '@', // переменную из контролера ожидаем получить read only
            myValue2: '=',
            myValue3: '='
            // myFunction: '&'
            // myFunction: '='
        },
        restrict: 'E',
        template: '<label>{{myValue1}}</label><input type="text" ng-model="myValue1">' +
            '<label>{{myValue2}}</label><input type="text" ng-model="myValue2">' +
            '<button ng-click="myFunction()">Press</button>'
    };
});
