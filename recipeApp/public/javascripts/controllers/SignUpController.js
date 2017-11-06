app.controller('SignUpController', ['$scope', '$rootScope', 'AuthService', 'AUTH_EVENTS', function($scope, $rootScope, AuthService, AUTH_EVENTS) {
  $scope.signup = function(credentials) {
    AuthService.signup(credentials).then(function(user) {
      if (user.errors) {
        $scope.errors = user.errors;
      }
      else {
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        $scope.setCurrentUser(user);
        $scope.getRecipes();
      }
    }, function() {
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
    })
  }
}]);