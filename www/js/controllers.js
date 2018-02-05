angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) { //injetar o $http aqui

    $http({
        method : 'GET',
        url : 'https://api.themoviedb.org/3/movie/popular?page=01&api_key=327112e6bb7a8217b2c858631a99d106'
    }).then(function mySuccess(resposta) {

            console.log(resposta.data.results);
            $scope.filmes = resposta.data.results


        }, function myError(resposta) {
           $scope.erro = resposta.statusText;
      });

});
