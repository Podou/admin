define(['app'], function (app) {
  app.controller('UiModalsController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Modals';
    breadcrumb.subTitle = 'Preview of UI elements';
    breadcrumb.list = [
      { name: 'UI', link: 'main.ui.general'},
      { name: 'Modals' }
    ];
  }]);
});
