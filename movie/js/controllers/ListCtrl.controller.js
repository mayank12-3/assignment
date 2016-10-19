;(function(){
  "use strict";

    angular
      .module('app')
      .controller("ListCtrl", function($scope, $http) {
  $scope.submit = function() {
    $scope.error = false;
    $http.get('//www.omdbapi.com/?t=' + $scope.search + '&y=&plot=full&r=json').success(function(data, status, headers, config) {
      $scope.movie = data;
      $scope.results = true;
      $scope.error = false;
      debugger
      if ($scope.movie.Poster === "N/A") {
        $scope.movie.Poster = "//placehold.it/350x450";
      }
      if ($scope.movie.Response === "False") {
        $scope.results = false;
        $scope.error = true;
      }
    }).error(function(data, status, headers, config) {
      $scope.results = false;
      $scope.error = true;
    });
  };
  $scope.saveMovie = function(imdbID) {
    $scope.locall = {};
    $http.get(' //www.omdbapi.com/?i=' + imdbID + '&plot=short&r=json').success(function(data, status, headers, config) {
      $scope.savedMovies.push(data);
      localStorage.setItem('local', JSON.stringify($scope.savedMovies));
      var locally = JSON.parse(localStorage.getItem('local'));
    });
  };
  $scope.remove = function(item) {
    var index = $scope.savedMovies.indexOf(item)
    $scope.savedMovies.splice(index, 1);
  }
  var haslocal = JSON.parse(localStorage.getItem('local'));
  
  $scope.savedMovies = [];
  if (haslocal == null) {
    $scope.savedMovies = [];
  } else {
    $scope.savedMovies = haslocal;
  }
});
    
})();
