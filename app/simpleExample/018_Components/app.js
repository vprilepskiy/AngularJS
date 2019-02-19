var myApp = angular.module('myApp', []);

myApp.component('myComponent', {

    template: '<input type="number" ng-model="$ctrl.name"><label>{{$ctrl.name}}</label><input type="number" ng-model="$ctrl.newName"><button ng-click="$ctrl.increment()"></button>',
    bindings: {
        name: '=',
        newName: '<'
    },
    controller: function() {
        this.$onChanges = function () {
            console.log(this.newName);
            console.log(this.name);
        },
        this.$onInit = function() { //требуется с версии 1.6
            this.newName = 10 + this.name;
            this.increment = function () {
                this.name++;
            }
        }
    },
    require: {
        // используется для связывания м/у компонентами
    }

});
