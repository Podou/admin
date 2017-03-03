define(['app'], function (app) {
  app.controller('TableSimpleController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Simple Tables';
    breadcrumb.subTitle = 'advanced tables';
    breadcrumb.list = [
      { name: 'Table', link: 'main.table.simple'},
      { name: 'Simple' }
    ];
  }]);
});
