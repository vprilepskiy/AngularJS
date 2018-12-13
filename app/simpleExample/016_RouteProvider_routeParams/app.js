var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<h4>HOME PAGE, {{myVar}}</h4>',
            controller: 'myCtrl1'
        })
        .when('/tmpl1', {
            templateUrl: 'tmpl/first.tmpl.html',
            controller: 'myCtrl1'
        })
        .when('/tmpl2/:pageNumber', {
            templateUrl: 'tmpl/second.tmpl.html',
            controller: 'myCtrl2'
        })
        .when('/toHome', {
            redirectTo: '/'
        })
        .otherwise({
            template: '<h3>404 Нет ничего</h3>'
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