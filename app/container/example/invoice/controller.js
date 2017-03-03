define(['app'], function (app) {
  app.controller('ExampleInvoiceController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Invoice';
    breadcrumb.subTitle = 'it all starts here';
    breadcrumb.list = [
      { name: 'Examples', link: 'main.example.invoice'},
      { name: 'Invoice' }
    ];
  }]);
});
