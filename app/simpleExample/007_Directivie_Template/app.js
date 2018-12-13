var myApp = angular.module('myApp', []);

myApp.directive('myDirective', function () {

    var myPeoples = [
        {id: 1, name: "my_name_1"},
        {id: 2, name: "my_name_2"},
        {id: 3, name: "my_name_3"}
    ];

    return {
        restrict: 'C', // Class
        template: '<div ng-repeat="people in peoples">{{people.name}}</div>',
        link: function (scope, element, attrs) {
            scope.peoples = myPeoples;
        }
    }
});

// 'A' - only matches attribute name
// 'E' - only matches element name
// 'C' - only matches class name
// 'M' - only matches comment