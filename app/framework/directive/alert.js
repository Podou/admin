
define('alert', ['app'], function(app) {
  app.directive('alert', [function() {
    return {
      restrict: 'E',
      scope: {
        type: '@',
        title: '@',
        content: '='
      },
      template: '<div class="alert alert-{{ type }} alert-dismissible">'
        + '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'
        + '<h4><i class="icon fa fa-{{ icon }}"></i> {{ title }}</h4>'
        + '{{ content }}'
        + '</div>',
      controller: ['$scope', function($scope) {
        if ($scope.type === 'danger') {
          $scope.icon = 'ban';
          if (!$scope.title) {
            $scope.title = 'Danger';
          }
        } else if ($scope.type === 'warning') {
          $scope.icon = 'warning';
          if (!$scope.title) {
            $scope.title = 'Warning';
          }
        } else if ($scope.type === 'success') {
          $scope.icon = 'check';
          if (!$scope.title) {
            $scope.title = 'Success';
          }
        } else {
          $scope.type = 'info';
          $scope.icon = 'info';
          if (!$scope.title) {
            $scope.title = 'Info';
          }
        }
      }]
    };
  }]);
});
