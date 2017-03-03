
define('breadcrumb', ['app'], function(app) {
  app.directive('breadcrumb', [function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        subTitle: '@',
        data: '@'
      },
      template: '<section class="content-header"><h1>{{ title }}<small>{{ subTitle }}</small></h1>'
        + '<ol class="breadcrumb">'
        + '<li><a ui-sref="main.dashboard.v1"><i class="fa fa-dashboard"></i> Home</a></li>'
        + '<li ng-repeat="item in data" class="active">Calendar</li>'
        + '</ol></section>',
      controller: ['$scope', function($scope) {
      }]
    };
  }]);
});
