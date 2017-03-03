define(['app'], function (app) {
  app.controller('Example500Controller', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = '500 Error Page';
    breadcrumb.subTitle = '';
    breadcrumb.list = [
      { name: 'Examples', link: 'main.example.invoice'},
      { name: '500' }
    ];
  }]);
});
