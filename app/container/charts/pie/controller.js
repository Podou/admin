define(['app'], function (app) {
  app.controller('ChartsPieController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Pie Chart';
    breadcrumb.subTitle = 'Preview sample';
    breadcrumb.list = [
      { name: 'Charts', link: 'main.charts.pie'},
      { name: 'Pie Chart' }
    ];
  }]);
});
