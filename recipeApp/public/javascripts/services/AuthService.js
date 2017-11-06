app.factory('AuthService', function($http) {
  var authService = {};
  authService.login = function(credentials) {
    return $http.post('/users/login', credentials).then(function(res) {
      return res.data;
    })
  }
  authService.signup = function(credentials) {
    return $http.post('users/signup', credentials).then(function(res) {
      return res.data;
    });
  }
  return authService;
})