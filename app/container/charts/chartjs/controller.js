define(['app'], function (app) {
  app.controller('ChartsChartjsController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'ChartJS';
    breadcrumb.subTitle = 'Preview sample';
    breadcrumb.list = [
      { name: 'Charts', link: 'main.charts.chartjs'},
      { name: 'ChartJS' }
    ];
  }]);
});
