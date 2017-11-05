
app.controller('MainController', ['$scope', '$location', 'Recipes', function($scope, $location, Recipes) {

  // $http({method: 'GET', url: '/api/name'}).
  // success(function(data, status, headers, config) {
  //   $scope.name = data.name;
  // }).
  // error(function(data, status, headers, config) {
  //   $scope.name = 'Error!'
  // });
  
  $scope.currentUser = null;
   
  $scope.setCurrentUser = function (user) {
    $scope.currentUser = user.username;
    // $scope.recipes = user.recipes;
    $location.path('/recipes/show')
    Recipes.getRecipes(user._id).then(function(data) {
      $scope.recipes = data.data;
      console.log($scope.recipes)
    })
    // console.log(user)
  };
}])