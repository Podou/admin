define(['app'], function (app) {
  app.controller('ExampleBlankController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Blank page';
    breadcrumb.subTitle = 'it all starts here';
    breadcrumb.list = [
      { name: 'Examples', link: 'main.example.invoice'},
      { name: 'Blank' }
    ];
  }]);
});
