define(['app'], function (app) {
  app.controller('AuthRegisterController', ['$state', 'config', function($state, $cookieStore, config) {

    var self = this;
    self.data = {};
    self.register = function() {
      var token = $cookieStore.put('access_token', 'AKLJFLAJFOIASJDJASPOJAFJASFASF');
      $state.go('main.dashboard.v1');
    };
  }]);
});
