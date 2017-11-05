
app.controller('MainController', ['$scope', '$location', function($scope, $location) {
  
  $scope.currentUser = null;
   
  $scope.setCurrentUser = function (user) {
    $scope.currentUser = user.username;
    $scope.recipes = user.recipes;
    $location.path('/recipes/show')
  };
}])