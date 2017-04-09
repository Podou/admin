define(['app'], function (app) {
  app.controller('VersionController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Version';
    breadcrumb.subTitle = 'Version log';
    breadcrumb.list = [
      { name: 'Version' }
    ];

    var self = this;
    self.logs = [
      {
        version: 'v0.0.3',
        name: '添加Version页，添加我的项目页，添加Labyrinth x1项目',
        date: '2017-04-09 23:29:50'
      },
      {
        version: 'v0.0.2',
        name: '在Dashboard中添加教程，添加论坛页',
        date: '2017-01-01'
      },
      {
        version: 'v0.0.1',
        name: '初始化项目',
        date: '2017-01-01'
      }
    ]
  }]);
});
