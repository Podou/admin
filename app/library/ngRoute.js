define('ngRoute', ['app', 'routes'], function (app, routes) {
  var startUrl = 'app/';
  var templatePath = startUrl + 'container/ngTemplate.html';
  var dashboardTemplatePath = startUrl + 'container/dashboard/'
  var dashboardUiSref = 'main.dashboard.';

  var states = [{
    url: 'dashboard',
    title: 'Dashboard',
    templateUrl: templatePath
  }, {
    url: 'project',
    title: 'Project',
    templateUrl: templatePath
  }, {
    url: 'widget',
    title: 'Widget',
    templateUrl: templatePath
  }, {
    url: 'version',
    title: 'Version',
    templateUrl: templatePath
  }, {
    url: 'forum',
    title: 'Forum',
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
    console.log(routes);
    angular.forEach(states, function(state) {
      generateProvider.state(state);
    });
    angular.forEach(routes, function(route) {
      generateProvider.router(route);
    });
  }]);
});
