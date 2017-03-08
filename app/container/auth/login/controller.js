define(['app'], function (app) {
  app.controller('AuthLoginController', ['$state', '$cookieStore', 'config', function($state, $cookieStore, config) {

    var self = this;
    self.data = {};
    self.login = function() {
      if (self.data.username === 'admin' && self.data.password === 'admin123') {
        $cookieStore.put('access_token', 'AKLJFLAJFOIASJDJASPOJAFJASFASF');
        $cookieStore.put('username', self.data.username);
        $state.go('main.dashboard.me');
      } else {
        self.showError = true;
      }
    }
  }]);
});
