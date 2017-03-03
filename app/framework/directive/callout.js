
define('callout', ['app'], function(app) {
  app.directive('callout', [function() {
    return {
      restrict: 'E',
      scope: {
        type: '@',
        title: '@',
        content: '='
      },
      template: '<div class="callout callout-{{ type }}">'
        + '<h4>{{ title }}</h4>'
        + '<p>{{ content }}</p>'
        + '</div>',
      controller: ['$scope', function($scope) {
        if ($scope.type !== 'danger' || $scope.type !== 'warning' || $scope.type !== 'success') {
          $scope.type = 'info';
        }
      }]
    };
  }]);
});
