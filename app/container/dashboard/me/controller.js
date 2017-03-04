define(['app'], function (app) {
  app.controller('DashboardMeController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Dashboard';
    breadcrumb.subTitle = 'Control panel';
    breadcrumb.list = [
      { name: 'Dashboard', link: 'main.dashboard.me'},
      { name: 'Mine' }
    ];

    var self = this;
    self.githubs = [ {
      name: 'Podou Admin',
      link: 'https://www.github.com/Podou/admin'
    }, {
      name: 'AdminLTE Angular',
      link: 'https://github.com/Quesle/AdminLTE/tree/angular'
    }, {
      name: 'Admin Plan',
      link: 'https://github.com/flyingSprite/adminPlan'
    }, {
      name: 'Spinelle',
      link: 'https://github.com/flyingSprite/spinelle'
    } ]
  }]);
});
