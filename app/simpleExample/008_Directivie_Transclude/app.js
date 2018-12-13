var myApp = angular.module('myApp', []);

myApp.directive('myDirective', function () {
    return {
        restrict: 'E', // Element
        transclude: true, // обязательно включить
        template: 'This is my directive. <ng-transclude><ng-transclude/>',
        link: function (scope, element, attrs) {
            scope.peoples = myPeoples;
        }
    }
});


myApp.controller('myCtrl', function ($scope) {
    $scope.name = 'myName';
});

myApp.directive('myDirectivePro', function () {
    return {
        restrict: 'E', // Element
        transclude: true, // обязательно включить
        template: 'This is my directive Pro.',
        link: function (scope, element, attrs, ctrl, transclude) {
            transclude(scope, function (clone, scope) {
                element.append(clone);
            });
        }
    };
});

// 'A' - only matches attribute name
// 'E' - only matches element name
// 'C' - only matches class name
// 'M' - only matches comment