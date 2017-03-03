define(['app'], function (app) {
  app.controller('FormsGeneralController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'General Form Elements';
    breadcrumb.subTitle = 'Preview';
    breadcrumb.list = [
      { name: 'Forms', link: 'main.forms.general'},
      { name: 'General Elements' }
    ];
  }]);
});
