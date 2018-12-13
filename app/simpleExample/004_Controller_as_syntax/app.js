var myApp = angular.module('myApp', []);

myApp.controller('ctrl1', function ($scope) {
    this.myValue = 'Hello ctrl1';
});

myApp.controller('ctrl2', function ($scope) {
    this.myValue = 'Hello ctrl2';
});

myApp.controller('ctrl3', function ($scope) {
    this.myValue = 'Hello ctrl3';
});
