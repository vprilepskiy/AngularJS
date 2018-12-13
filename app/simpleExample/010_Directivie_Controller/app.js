var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', function ($scope) {
    $scope.myValue = 'oldValue';
});

myApp.directive('myDirectiveF', function () {
    return {
        scope: false, // false default Общий экземпляр scope
        restrict: 'E', // можно писать 'EA', тогда директива будет работать и через атрибут и через элемент
        template: '<input type="text" ng-model="myValue">',
        link: function (scope, element, attrs) {
            // scope.myValue = 'newValue'; // обновляем переменную в общем scope
        }
    }
});

myApp.directive('myDirectiveT', function () {
    return {
        scope: true, // false default Тут создается свой экземпляр scope
        restrict: 'E', // можно писать 'EA', тогда директива будет работать и через атрибут и через элемент
        template: '<input type="text" ng-model="myValue">',
        link: function (scope, element, attrs) {
        }
    }
});
