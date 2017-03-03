define(['app'], function (app) {
  app.controller('CalendarController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Calendar';
    breadcrumb.subTitle = 'Control panel';
    breadcrumb.list = [
      { name: 'Calendar' }
    ];
  }]);
});
