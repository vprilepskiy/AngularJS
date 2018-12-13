var myApp = angular.module('myApp', ['ngMockE2E']);

myApp.run(function ($httpBackend) {

    var obj = [{id: 2}, {name: 'Mike'}];

    $httpBackend.whenGET('http://192.168.0.134:8888/get').respond(200, obj);
    
    // $httpBackend.whenGET('http://192.168.0.134:8888/get').respond(function (method, url, data) {
    //     console.log('method', method);
    //     console.log('url', url);
    //     console.log('data', data);
    // });

});


myApp.controller('myCtrl', function ($scope, $http) {

    $http.get('http://192.168.0.134:8888/get')
        .then(function (response) {
            $scope.response = response;
            $scope.content = response.data;
            $scope.statuscode = response.status;
            $scope.statustext = response.statusText;
        }, function (response) {
            $scope.err = 'Error';
        });

    // $http({
    //     method: "GET",
    //     url: "http://localhost:8888/get"
    // }).then(function mySuccess(response) {
    //     $scope.myWelcome = response.data;
    // }, function myError(response) {
    //     $scope.myWelcome = response.statusText;
    // });
    // console.log('get', $http.get('localhost:8888/get'));
});
