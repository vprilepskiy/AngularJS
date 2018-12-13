var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', function ($scope) {
    console.log('myCtrl');
    $scope.myFuncIncrement = function (intValue1, intValue2) {
        console.log('func');
        var result = parseInt(intValue1) + parseInt(intValue2);
        console.log(result);
        return result;
    };
});