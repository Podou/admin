define(['app'], function (app) {
  app.controller('ProjectGameController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = '我的项目';
    breadcrumb.subTitle = '游戏开发';
    breadcrumb.list = [
      { name: '我的项目' },
      { name: '游戏开发' }
    ];
  }]);
});
