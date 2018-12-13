var myApp = angular.module('myApp', []);

myApp.directive('myDirective', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.text("This is my directive. Attribute.");
        }
    }
});

myApp.directive('myDirective', function () {
    return {
        restrict: 'E', // можно писать 'EA', тогда директива будет работать и через атрибут и через элемент
        link: function (scope, element, attrs) {
            element.text("This is my directive. Element.");
        }
    }
});

myApp.directive('myDirective', function () {
    return {
        restrict: 'C',
        link: function (scope, element, attrs) {
            element.text("This is my directive. Class.");
        }
    }
});

myApp.directive('myDirective', function () {
    return {
        restrict: 'M', // можно писать 'EA', тогда директива будет работать и через атрибут и через элемент
        replace: true,
        template: '<p> This is my directive. Comment. </p>'
    }
});

// 'A' - only matches attribute name
// 'E' - only matches element name
// 'C' - only matches class name
// 'M' - only matches comment