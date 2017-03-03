define(['app'], function (app) {
  app.controller('FormsEditorsController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Text Form Elements';
    breadcrumb.subTitle = 'Preview';
    breadcrumb.list = [
      { name: 'Forms', link: 'main.forms.general'},
      { name: 'Text Elements' }
    ];
  }]);
});
