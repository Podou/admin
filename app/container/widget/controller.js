define(['app'], function (app) {
  app.controller('WidgetController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Widgets';
    breadcrumb.subTitle = 'Preview page';
    breadcrumb.list = [
      { name: 'Widgets' }
    ];
  }]);
});
