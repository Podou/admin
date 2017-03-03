define(['app'], function (app) {
  app.controller('Example404Controller', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = '404 Error Page';
    breadcrumb.subTitle = '';
    breadcrumb.list = [
      { name: 'Examples', link: 'main.example.invoice'},
      { name: '404' }
    ];
  }]);
});
