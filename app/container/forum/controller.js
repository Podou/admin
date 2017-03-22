define(['app'], function (app) {
  app.controller('ForumController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Forum';
    breadcrumb.subTitle = 'Control panel';
    breadcrumb.list = [
      { name: 'Forum' }
    ];

    var self = this;
    self.forums = [
      {
        name: 'Cocos论坛',
        link: 'http://forum.cocos.com/',
        logo: 'http://forum.cocos.com/images/logo.png'
      }
    ]
  }]);
});
