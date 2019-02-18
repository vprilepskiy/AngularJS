var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', function ($scope) {
    $scope.myValue = 'oldValue';
});

myApp.directive('myDirective', function () {
    return {
        scope: false, // false default Общий экземпляр scope
        restrict: 'E', // можно писать 'EA', тогда директива будет работать и через атрибут и через элемент
        template: '<input type="text" ng-model="myValue">',
        link: function (scope, element, attrs) {
            scope.myValue = 'newValue'; // обновляем переменную в общем scope
        }
    }
});

myApp.component('myComponent', {

    template: 'template: "Name: {{$ctrl.name}}, newName: {{$ctrl.newName}}',
    bindings: {
        name: '@'
    },
    controller: function() {
        this.$onInit = function() { //требуется с версии 1.6
            this.newName = "Mac" + this.name;
        }
    }

});
