var myApp = angular.module('myApp', []);

// myApp.run(function ($http) {
//     $http.defaults.headers.common['Access-Control-Allow-Origin'] = '12';
// });

myApp.controller('myCtrl', function ($scope, $http) {

    // $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';




    // $http.get('http://192.168.0.134:8888/get1')
    //     .then(function (response) {
    //         $scope.response = response;
    //         $scope.content = response.data;
    //         $scope.statuscode = response.status;
    //         $scope.statustext = response.statusText;
    //     }, function (response) {
    //         $scope.err = 'Error';
    //     });


    $http.get('http://192.168.0.134:8888/get').then(successCallback, errorCallback);

    function successCallback(response) {
        $scope.response = response;
        $scope.content = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statusText;
    };

    function errorCallback(response) {
        $scope.err = 'Error';
    };

    var obj = {id: 1, name: 'Irida'};

    var headers = {'Access-Control-Allow-Origin': '*'};


    $http({
        method: 'POST',
        url: 'http://192.168.0.134:8888/post',
        headers: {'Access-Control-Allow-Origin': 'http://localhost:63342'},
        data: obj
    }).then(function successCallback(response) {
        $scope.response1 = response;
        $scope.content1 = response.data;
        $scope.statuscode1 = response.status;
        $scope.statustext1 = response.statusText;
    }, function errorCallback(response) {
        $scope.err1 = 'Error';
    });


    // $scope.post = function post () {
    //     $http.post('http://192.168.0.134:8888/post', obj, [config])
    //         .then(function (response) {
    //             $scope.response1 = response;
    //             $scope.content1 = response.data;
    //             $scope.statuscode1 = response.status;
    //             $scope.statustext1 = response.statusText;
    //         }, function (response) {
    //             $scope.err1 = 'Error';
    //         });
    // };


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
