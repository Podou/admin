define(['app'], function (app) {
  app.controller('UiTimelineController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Timeline';
    breadcrumb.subTitle = 'timeline';
    breadcrumb.list = [
      { name: 'UI', link: 'main.ui.general'},
      { name: 'Timeline' }
    ];
  }]);
});
