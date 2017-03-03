define(['app'], function (app) {
  app.controller('ChartsFlotController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Flot Charts';
    breadcrumb.subTitle = 'Preview sample';
    breadcrumb.list = [
      { name: 'Charts', link: 'main.charts.chartjs'},
      { name: 'Flot Charts' }
    ];
  }]);
});
