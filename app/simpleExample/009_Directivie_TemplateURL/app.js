var myApp = angular.module('myApp', []);

myApp.directive('myDirective', function () {
    return {
        restrict: 'E', // Element
        templateUrl: 'my.tmpl.html',
        link: function (scope, element, attrs) {
        }
    }
});

// 'A' - only matches attribute name
// 'E' - only matches element name
// 'C' - only matches class name
// 'M' - only matches comment