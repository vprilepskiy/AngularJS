'use strict';

// Declare app level module which depends on views, and components
var mainModule = angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]);

mainModule.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);

mainModule.controller('myCtrl', ['$scope', 'myFact', function ($scope, myFact) {
    $scope.myValue = 'My Value';
    $scope.myFactValue = myFact.myFactValue;
}]);

mainModule.factory('myFact', myFactFunc);

function myFactFunc() {
    return {
        myFactValue : 'myFactValue'
    }
};
