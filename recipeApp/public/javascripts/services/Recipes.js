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
  return Recipes;
});