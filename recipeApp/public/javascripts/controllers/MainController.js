app.controller('MainController', ['$scope', '$http', function($scope, $http) {
  $http.get('/recipes/show').then(function(response) {
    $scope.recipes = response.data;
  })
}])