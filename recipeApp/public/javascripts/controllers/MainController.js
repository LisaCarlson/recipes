
app.controller('MainController', ['$scope', '$location', 'Recipes', function($scope, $location, Recipes) {

  // $http({method: 'GET', url: '/api/name'}).
  // success(function(data, status, headers, config) {
  //   $scope.name = data.name;
  // }).
  // error(function(data, status, headers, config) {
  //   $scope.name = 'Error!'
  // });
   
  $scope.setCurrentUser = function(user) {
    $location.path('/recipes')
    $scope.currentUser = user.username;
    $scope.id = user._id;    
  };

  $scope.getRecipes = function() {
    return Recipes.getRecipes($scope.id).then(function(data) {
      $scope.recipes = data.data; 
    })
  }

  $scope.addRecipe = function(recipe) {
    recipe.userId = $scope.id;
    Recipes.addRecipe(recipe).then(function(data) {
      $scope.recipes = data.data;
      $scope.recipe = {};
      $scope.addForm = addForm;
    });
  }

  $scope.deleteRecipe = function(recipeId) {
    Recipes.deleteRecipe(recipeId).then(function(data) {
      $scope.recipes = data.data;
    })
  }

}])