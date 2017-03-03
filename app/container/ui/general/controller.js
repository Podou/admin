define(['app'], function (app) {
  app.controller('UiGeneralController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'General UI';
    breadcrumb.subTitle = 'Preview of UI elements';
    breadcrumb.list = [
      { name: 'UI', link: 'main.ui.general'},
      { name: 'General UI' }
    ];
  }]);
});
