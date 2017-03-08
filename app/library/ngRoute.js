define('ngRoute', ['app'], function (app) {
  var startUrl = 'app/';
  var templatePath = startUrl + 'container/ngTemplate.html';
  var dashboardTemplatePath = startUrl + 'container/dashboard/'
  var dashboardUiSref = 'main.dashboard.';

  function getRouter(routes, name, title) {
    // .replace(/(\w)/,function(v){return v.toUpperCase()});
    routes = routes || [];
    var uiSref = 'main.' + routes.join('.');
    if (name === 'index') {
      uiSref += '.index';
    }

    function getName(names) {
      var name = '';
      angular.forEach(names, function(value) {
        name += value.replace(/(\w)/,function(v){return v.toUpperCase()});
      });
      console.log(name);
      return name;
    }

    return {
      title: title,
      name: name,
      uiSref: uiSref,
      templateUrl: startUrl + 'container/' + routes.join('/') + '/index.html',
      controller: getName(routes) + 'Controller',
      controllerUrl: startUrl + 'container/'+ routes.join('/') + '/controller.js'
    };
  }

  var dashboardRouter = [
    getRouter([ 'dashboard', 'v1' ], 'v1', 'v1'),
    getRouter([ 'dashboard', 'v2' ], 'v2', 'v2'),
    getRouter([ 'dashboard', 'me' ], 'me', 'Mine')
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

  // Create provider for router.
  app.provider('generate', [ '$stateProvider',
    function($stateProvider) {
      this.state = function(state) {
        $stateProvider.state('main.' + state.url, {
          url: state.url,
          views: {
            'main.container':{
              templateUrl: state.templateUrl,
              controller: ['$rootScope', function($rootScope) {
                $rootScope.$broadcast('onHeaderTitle', {title: state.title});
              }]
            }
          }
        });
      };
      this.router = function(route) {
        $stateProvider
        .state(route.uiSref, {
          url: '/' + route.name +'?'+ route.params,
          views: {
            '': {
              templateUrl: route.templateUrl,
              controller: route.controller,
              controllerAs: 'ctrl'
            }
          },
          resolve: {
            // deps: $requireProvider.requireJS([route.controllerUrl])
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
              return route.depsModule
              ? $ocLazyLoad.load(route.depsModule).then(function() {
                return $ocLazyLoad.load(route.controllerUrl);
              })
              : $ocLazyLoad.load(route.controllerUrl);
            }]
          },
          params: { data: {} }
        });
      };
      this.$get = function() {};
    }
  ]);
  app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // This is home state, will show _header.html, _footer.html
    // And main html
    .state('main', {
      url:'/',
      views: {
        header: {
          templateUrl: startUrl + 'common/_header.html'
        },
        aside: {
          templateUrl: startUrl + 'common/_aside.html'
        },
        asideNext: {
          templateUrl: startUrl + 'common/_aside_next.html'
        },
        main: {
          templateUrl: startUrl + 'common/_container.html'
        },
        footer: {
          templateUrl: startUrl + 'common/_footer.html'
        }
      }
    });

    $urlRouterProvider
      .when('/main.dashboard.me', '/dashboard/me')
      .when('/main', '/dashboard/me')
      .otherwise('main.dashboard.me');
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
