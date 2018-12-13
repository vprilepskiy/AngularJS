var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<h4>Hello world, {{myVar}}</h4>',
            controller: 'myCtrl1'
        })
        .when('/page/:pageNumber', {
            template: '<h4>Hello 2, {{myVar}}, Page № {{id}}</h4>',
            controller: 'myCtrl2'
        })
        .otherwise({
            template: '404'
        })
});

myApp.controller('myCtrl1', function ($scope) {
    console.log('myCtrl1');
    $scope.myVar = 'c1';
});

myApp.controller('myCtrl2', function ($scope, $routeParams) {
    console.log('myCtrl2');
    $scope.myVar = 'c2';
    $scope.id = $routeParams.pageNumber;
});