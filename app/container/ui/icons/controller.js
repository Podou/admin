define(['app'], function (app) {
  app.controller('UiIconsController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Icons';
    breadcrumb.subTitle = 'a set of beautiful icons';
    breadcrumb.list = [
      { name: 'UI', link: 'main.ui.general'},
      { name: 'Icons' }
    ];
  }]);
});
