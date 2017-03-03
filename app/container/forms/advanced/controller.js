define(['app'], function (app) {
  app.controller('FormsAdvancedController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Advanced Form Elements';
    breadcrumb.subTitle = 'Preview';
    breadcrumb.list = [
      { name: 'Forms', link: 'main.forms.general'},
      { name: 'Advanced Elements' }
    ];
  }]);
});
