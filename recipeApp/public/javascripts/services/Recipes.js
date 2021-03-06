app.factory('Recipes', function($http) {
  var Recipes = {};
  Recipes.getRecipes = function(id) {
    return $http.get('/recipes/id/'+id).then(function(data) {
      return data;
    }, function(err) {
      return err;
    });
  }
  Recipes.addRecipe = function(recipe) {
    recipe.ingredients = recipe.ingredients.split(',');
    return $http.post('/recipes', recipe).then(function(data) {
      return data;
    }, function(err) {
      return err;
    })
  }
  Recipes.deleteRecipe = function(recipeId) {
    return $http.delete('/recipes/'+recipeId).then(function(data) {
      return data;
    }, function(err) {
      return err;
    })
  }
  Recipes.getDetail = function(recipeId) {
    return $http.get('/recipes/detail/'+recipeId).then(function(data) {
      return data;
    }, function(err) {
      return err;
    })
  }
  return Recipes;
});