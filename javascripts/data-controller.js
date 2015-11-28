angular.module('personalPage', [])
    .controller('DataController', function($scope, $http) {
        var githubuser = $scope.githubusername;

        $http({
            method: 'GET',
            url: 'data/data_es.json',
            contentType: "application/json"}).then(
                function successCallback(response) {
                    $scope.userdata = response.data;
                }, function errorCallback(response) {
                    alert("error");
                });;

        if(githubuser) {
            $http({
                method: 'GET',
                url: 'https://api.github.com/users/' + githubuser,
                contentType: "application/json"}).then(
                    function successCallback(response) {
                        $scope.githubuserdata = response.data;
                    }, function errorCallback(response) {
                        alert("error");
                    });;
        }


    });