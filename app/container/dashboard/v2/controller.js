define(['app'], function (app) {
  app.controller('DashboardV2Controller', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Dashboard';
    breadcrumb.subTitle = 'Control panel';
    breadcrumb.list = [
      { name: 'Dashboard', link: 'main.dashboard.v1'},
      { name: 'v2' }
    ];
  }]);
});
