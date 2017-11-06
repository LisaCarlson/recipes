var app = angular.module('recipeApp', ['ngRoute']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {templateUrl: 'recipes/login', controller: 'LoginController'});
    $routeProvider.when('/signup', {templateUrl: 'recipes/signup', controller: 'SignUpController'});
    $routeProvider.when('/recipes', {templateUrl: 'recipes/show', controller: 'MainController'});
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  }]);