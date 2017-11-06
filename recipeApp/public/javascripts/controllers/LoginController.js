app.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})

app.controller('LoginController', ['$scope', '$rootScope', 'AuthService', 'AUTH_EVENTS', function($scope, $rootScope, AuthService, AUTH_EVENTS) {
  $scope.credentials = {
    username: '',
    email: '',
    password: ''
  };
  $scope.login = function(credentials) {
    AuthService.login(credentials).then(function(user) {
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
}])