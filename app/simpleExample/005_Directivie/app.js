var myApp = angular.module('myApp', []);



myApp.directive('mydirective', function () {
    return {
        link: function (scope, element, attrs) {
            // scope область видимости этой директивы
            console.log('scope', scope);
            // DOM-element  этой директивы
            console.log('element', element);
            // все атрибуты этой директивы
            console.log('attrs', attrs);

            element.text("This is my directive");
        }
    }
});
