define('ngRoute', ['app'], function (app) {
  var startUrl = 'app/';
  var templatePath = startUrl + 'container/ngTemplate.html';
  var dashboardTemplatePath = startUrl + 'container/dashboard/'
  var dashboardUiSref = 'main.dashboard.';

  // var dashboardRouter = [
  //   {
  //     title: 'Dashboard v1',
  //     name: 'v1',
  //     uiSref: 'main.dashboard.v1',
  //     templateUrl: startUrl + 'container/dashboard/v1/index.html',
  //     controller: 'DashboardV1Controller',
  //     controllerUrl: startUrl + 'container/dashboard/v1/controller.js'
  //   }, {
  //     title: 'Dashboard v2',
  //     name: 'v2',
  //     uiSref: 'main.dashboard.v2',
  //     templateUrl: startUrl + 'container/dashboard/v2/index.html',
  //     controller: 'DashboardV2Controller',
  //     controllerUrl: startUrl + 'container/dashboard/v2/controller.js'
  //   }
  // ];
  // var widgetRouter = [
  //   {
  //     title: 'Widget',
  //     name: 'index',
  //     uiSref: 'main.widget.index',
  //     templateUrl: startUrl + 'container/widget/index.html',
  //     controller: 'WidgetController',
  //     controllerUrl: startUrl + 'container/widget/controller.js'
  //   }
  // ];
  function getRouter(routes, name, title) {
    // .replace(/(\w)/,function(v){return v.toUpperCase()});
    routes = routes || [];
    var uiSref = 'main.' + _.join(routes, '.');
    if (name === 'index') {
      uiSref += '.index';
    }
    return {
      title: title,
      name: name,
      uiSref: uiSref,
      templateUrl: startUrl + 'container/' + _.join(routes, '/') + '/index.html',
      controller: _.upperFirst(_.camelCase(routes)) + 'Controller',
      controllerUrl: startUrl + 'container/'+ _.join(routes, '/') + '/controller.js'
    };
  }

  var dashboardRouter = [
    getRouter([ 'dashboard', 'v1' ], 'v1', 'v1'),
    getRouter([ 'dashboard', 'v2' ], 'v2', 'v2')
  ];

  var widgetRouter = [
    getRouter([ 'widget' ], 'index', 'Widget'),
  ];

  var chartsRouter = [
    getRouter([ 'charts', 'chartjs' ], 'chartjs', 'Chart.js'),
    getRouter([ 'charts', 'flot' ], 'flot', 'Flot.js'),
    getRouter([ 'charts', 'inline' ], 'inline', 'Inline'),
    getRouter([ 'charts', 'morris' ], 'morris', 'Morris')
  ];

  var uiRouter = [
    getRouter([ 'ui', 'buttons' ], 'buttons', 'Buttons'),
    getRouter([ 'ui', 'general' ], 'general', 'General'),
    getRouter([ 'ui', 'icons' ], 'icons', 'Icons'),
    getRouter([ 'ui', 'modals' ], 'modals', 'Modals'),
    getRouter([ 'ui', 'sliders' ], 'sliders', 'Sliders'),
    getRouter([ 'ui', 'timeline' ], 'timeline', 'Timeline')
  ];

  var formRouter = [
    getRouter([ 'forms', 'advanced' ], 'advanced', 'Advanced'),
    getRouter([ 'forms', 'editors' ], 'editors', 'Editors'),
    getRouter([ 'forms', 'general' ], 'general', 'General')
  ];

  var tableRouter = [
    getRouter([ 'table', 'data' ], 'data', 'Data'),
    getRouter([ 'table', 'simple' ], 'simple', 'Simple')
  ];

  var mailboxRouter = [
    getRouter([ 'mailbox', 'compose' ], 'compose', 'Compose'),
    getRouter([ 'mailbox', 'inbox' ], 'inbox', 'Inbox'),
    getRouter([ 'mailbox', 'read' ], 'read', 'Read')
  ];

  var calendarRouter = [
    getRouter([ 'calendar' ], 'index', 'Calendar'),
  ];

  var exampleRouter = [
    getRouter([ 'example', '404' ], '404', '404'),
    getRouter([ 'example', '500' ], '500', '500'),
    getRouter([ 'example', 'blank' ], 'blank', 'Blank'),
    getRouter([ 'example', 'invoice' ], 'invoice', 'Invoice'),
    getRouter([ 'example', 'profile' ], 'profile', 'Profile'),
    getRouter([ 'example', 'pace' ], 'pace', 'Pace')
  ];

  var authRouter = [
    getRouter([ 'auth', 'login' ], 'login', 'Login'),
    getRouter([ 'auth', 'register' ], 'register', 'Register')
  ];

  var routes = [
    authRouter,
    dashboardRouter,
    widgetRouter,
    uiRouter,
    formRouter,
    tableRouter,
    mailboxRouter,
    calendarRouter,
    exampleRouter,
    chartsRouter
  ];
  var states = [{
    url: 'dashboard',
    title: 'Dashboard',
    templateUrl: templatePath
  }, {
    url: 'widget',
    title: 'Widget',
    templateUrl: templatePath
  }, {
    url: 'calendar',
    title: 'Calendar',
    templateUrl: templatePath
  }, {
    url: 'ui',
    title: 'UI',
    templateUrl: templatePath
  }, {
    url: 'charts',
    title: 'Charts',
    templateUrl: templatePath
  }, {
    url: 'forms',
    title: 'Forms',
    templateUrl: templatePath
  }, {
    url: 'table',
    title: 'Table',
    templateUrl: templatePath
  }, {
    url: 'mailbox',
    title: 'Mailbox',
    templateUrl: templatePath
  }, {
    url: 'example',
    title: 'Example',
    templateUrl: templatePath
  }, {
    url: 'auth',
    title: 'Auth',
    templateUrl: templatePath
  }];

  app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // This is home state, will show _header.html, _footer.html
    // And main html
    .state('main', {
      url:'/',
      views: {
        header: {
          templateUrl: 'app/common/_header.html'
        },
        aside: {
          templateUrl: 'app/common/_aside.html'
        },
        asideNext: {
          templateUrl: 'app/common/_aside_next.html'
        },
        main: {
          templateUrl: 'app/common/_container.html'
        },
        footer: {
          templateUrl: 'app/common/_footer.html'
        }
      }
    });

    $urlRouterProvider
      .when('/main.dashboard.v1', '/dashboard/v1')
      .when('/main', '/dashboard/v1')
      .otherwise('main.dashboard.v1');
  }]);

  app.config(['generateProvider', function(generateProvider) {
    angular.forEach(states, function(state) {
      generateProvider.state(state);
    });
    angular.forEach(routes, function(subRoutes) {
      angular.forEach(subRoutes, function(route) {
        generateProvider.router(route);
      });
    });
  }]);
});
