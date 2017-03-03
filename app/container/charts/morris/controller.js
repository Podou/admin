define(['app'], function (app) {
  app.controller('ChartsMorrisController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Morris Charts';
    breadcrumb.subTitle = 'Preview sample';
    breadcrumb.list = [
      { name: 'Charts', link: 'main.charts.chartjs'},
      { name: 'Morris Charts' }
    ];
  }]);
});
