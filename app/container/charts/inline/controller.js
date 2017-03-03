define(['app'], function (app) {
  app.controller('ChartsInlineController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Inline Charts';
    breadcrumb.subTitle = 'multiple types of charts';
    breadcrumb.list = [
      { name: 'Charts', link: 'main.charts.chartjs'},
      { name: 'Inline Charts' }
    ];
  }]);
});
