define(['app'], function (app) {
  app.controller('ExampleProfileController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'User Profile';
    breadcrumb.subTitle = '';
    breadcrumb.list = [
      { name: 'Examples', link: 'main.example.invoice'},
      { name: 'User profile' }
    ];
  }]);
});
