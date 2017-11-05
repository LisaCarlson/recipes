app.factory('Recipes', function($http) {
  var Recipes = {};
  Recipes.getRecipes = function(id) {
    return $http.get('/recipes/id/'+id).then(function(data) {
      return data;
    }, function(err) {
      return err;
    });
  }
  return Recipes;
});