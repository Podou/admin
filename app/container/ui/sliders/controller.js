define(['app'], function (app) {
  app.controller('UiSlidersController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Sliders';
    breadcrumb.subTitle = 'range sliders';
    breadcrumb.list = [
      { name: 'UI', link: 'main.ui.general'},
      { name: 'Sliders' }
    ];
  }]);
});
