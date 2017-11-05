var app = angular.module('recipeApp', ['ngRoute']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {templateUrl: 'recipes/login', controller: 'LoginController'});
    $routeProvider.when('/recipes/show', {templateUrl: 'recipes/show', controller: 'MainController'});
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  }]);