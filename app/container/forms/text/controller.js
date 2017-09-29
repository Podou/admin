define(['app'], function (app) {
  app.directive('messageInput', [function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        messageText: '='
      },
      template: '<div>Message: {{title}} {{text}}</div>',
      // 放置js压缩
      controller: ['$scope', function($scope) {
        console.log($scope.title);
        $scope.$watch(
          function() { return $scope.messageText;},
          // a.messageText
          function() {
            $scope.text = '$' + $scope.messageText;
          }
        );
      }]
    };
  }]);

app.directive('msgTip', function(){
  return{
    restrict:'E',
    scope:{
      title:'@',
      tipTest:'='},
    template:'<div>{{title}}{{ttTest}}</div>',

    controller:['$scope',function(a){
      a.tipTest="";
      a.$watch(
        function(){return a.tipTest},
        function(){
          if(a.tipTest){
            a.ttTest = "changed:"+ a.tipTest;
          }
        }
      );

    }]

  };
});





  // app.provider('samplePro', function() {
  //   //like service
  // });
  app.service('sampleApi', function() {
    this.log = function(message, func) {
      console.log(message);
      if (func) {
        func(message + '=====>');
        func(message + '=====>3');
      }
    };

    this.exit = function() {
      console.log('Exit function');
    }
  });
  app.factory('sampleFac', function() {
    return function(message, func) {
      console.log(message);
      if (func) {
        func(message + '%%%%%');
        func(message + '%%%%%3');
      }
    };
  });
  app.controller('FormsTextController', ['$scope', 'breadcrumb', 'sampleApi', 'sampleFac',
  function($scope, breadcrumb, sampleApi, sampleFac) {
    breadcrumb.title = 'Text Form Elements';
    breadcrumb.subTitle = 'Preview';
    breadcrumb.list = [
      { name: 'Forms', link: 'main.forms.general'},
      { name: 'General Elements' }
    ];
    sampleApi.log('This is service test', function(tt) {
      console.log('===');
      console.log(tt);
    });
    sampleFac('This is service test', function(tt) {
      console.log('--->');
      console.log(tt);
    });
    /**
     * 1. double bind
     * 2. this & $scope
     * 3. ng-model
     * 4. ng-show/ng-hide ng-if & ng-repeat
     *
     * 5. Service & factory
     * 6. directive
     */
    $scope.name2 = 'sssname   s';
    var self = this;
    self.message = '';
    $scope.text = '123';
    self.clickBtn = function() {
      self.message = self.message + '1';
    };
    self.divswitch = false;
    self.clickSubmit = function() {
      console.log(self.message);
    };

    self.li = [
      'li1', 'li2', 'li3'
    ];

    this.testStr="inits";
    self.isYes = true;
    this.isShow = function(){
      console.log('===>', self.isYes);
      self.isYes2 = self.isYes;

    };
  }]);
});
