
define('progressBar', ['app'], function(app) {
  app.directive('progressBar', [function() {
    return {
      restrict: 'E',
      scope: {
        min: '@',
        max: '@',
        now: '@',
        vertical: '@',
        animate: '@',
        type: '@',
        color: '@',
        size: '@',
        striped: '@'
      },
      template: '<div class="progress" ng-class="processClass">'
        + '<div class="progress-bar progress-bar-{{ showType }}" ng-class="progressType" role="progressbar" aria-valuenow="{{ now }}" aria-valuemin="{{ min }}" aria-valuemax="{{ max }}" ng-style="progressStyle">'
        + '<span class="sr-only">{{ now }}% Complete (success)</span>'
        + '</div>'
        + '</div>',
      controller: ['$scope', function($scope) {
        var types = ['primary', 'warning', 'success', 'danger'];
        $scope.showType = $scope.type || $scope.color || 'primary';
        $scope.progressType = {
          'progress-bar-striped': $scope.striped
        };
        if (!$scope.min) {
          $scope.min = 0;
        }

        if (!$scope.max) {
          $scope.max = 100;
        }

        if (!$scope.now) {
          $scope.now = 0;
        }
        $scope.processClass = {
          active: $scope.animate,
          vertical: $scope.vertical,
          'progress-sm': $scope.size === 'sm',
          'progress-xs': $scope.size === 'xs',
          'progress-xxs': $scope.size === 'xxs'
        }

        if ($scope.vertical) {
          $scope.progressStyle = {height: $scope.now + '%'};
        } else {
          $scope.progressStyle = {width: $scope.now + '%'};
        }
      }]
    };
  }]);
});
