define(['app'], function (app) {
  app.controller('ExamplePaceController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Pace page';
    breadcrumb.subTitle = 'Loading page';
    breadcrumb.list = [
      { name: 'Examples', link: 'main.example.invoice'},
      { name: 'Pace' }
    ];
  }]);
});
