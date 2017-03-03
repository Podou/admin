
define('box', ['app'], function(app) {
  app.directive('box', [function() {
    return {
      restrict: 'E',
      scope: {
        type: '@',
        icon: '@',
        title: '@',
        supportCollapse: '@',
        supportRemove: '@'
      },
      template: '<div class="box box-{{ type }}">'
        + '<div class="box-header with-border">'
        + '<i class="{{ icon }}"></i>'
        + '<h3 class="box-title">{{ title }}</h3>'
        + '<div class="box-tools pull-right">'
        + '<button ng-if="supportCollapse" type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>'
        + '</button>'
        + '<button ng-if="supportRemove" type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>'
        + '</div>'
        + '</div>'
        + '<div class="box-body" ng-transclude></div>'
        + '</div>',
      transclude: true,
      controller: ['$scope', function($scope) {
        var types = ['default', 'solid'];
        if (types.indexOf($scope.type) < 0) {
          $scope.type = 'default';
        }
      }]
    };
  }]);

  app.directive('boxChild', [function() {
    return {
      restrict: 'E',
      scope: {
        type: '@',
        icon: '@',
        title: '@',
        groupId: '@',
        childId: '@',
        active: '@'
      },
      template: '<div class="panel box box-{{ type }}">'
        + '<div class="box-header with-border">'
        + '<i class="{{ icon }}"></i>'
        + '<h4 class="box-title">'
        + '<a data-toggle="collapse" data-parent="#{{groupId }}" href="#{{ childId }}">{{ title }}</a></h4>'
        + '</div>'
        + '<div id="{{ childId }}" class="panel-collapse collapse" ng-class="boxClass">'
        + '<div class="box-body" ng-transclude></div></div>'
        + '</div>',
      transclude: true,
      controller: ['$scope', '$attrs', function($scope) {
        var types = ['default', 'solid'];
        if (types.indexOf($scope.type) < 0) {
          $scope.type = 'default';
        }

        $scope.boxClass = {
          in: $scope.active
        };
      }]
    };
  }]);

  app.directive('boxGroup', [function() {
    return {
      restrict: 'E',
      scope: {
        groupId: '@'
      },
      template: '<div class="box-group" id="{{ groupId }}" ng-transclude></div>',
      transclude: true,
      controller: ['$scope', function() {
      }]
    };
  }]);

});
