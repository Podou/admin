define(['app'], function (app) {
  app.controller('UiButtonsController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Buttons';
    breadcrumb.subTitle = 'Control panel';
    breadcrumb.list = [
      { name: 'UI', link: 'main.ui.general'},
      { name: 'Buttons' }
    ];
  }]);
});
