define(['app'], function (app) {
  app.controller('TableDataController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Data Tables';
    breadcrumb.subTitle = 'advanced tables';
    breadcrumb.list = [
      { name: 'Table', link: 'main.table.data'},
      { name: 'Data' }
    ];
  }]);
});
