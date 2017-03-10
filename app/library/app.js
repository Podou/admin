define('app', [
  'angular-package'
], function (config) {
  var module = angular.module;
  angular.module = function() {
    var args = [].slice.call(arguments);
    var app = module.apply(angular, args);
    return app.config([
      '$controllerProvider',
      '$compileProvider',
      '$filterProvider',
      '$provide',
      function($controllerProvider, $compileProvider, $filterProvider, $provide) {
        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.provider = $provide.provider;
        app.value = $provide.value;
        app.constant = $provide.constant;
        app.decorator = $provide.decorator;
      }
    ]);
  };
  var app = angular.module('ngApp',[
    'oc.lazyLoad',
    'ui.router',
    // 'pascalprecht.translate',
    'ngCookies'
  ]);

  app.service('breadcrumb', function () {
    return {
      title: '',
      subTitle: '',
      list: []
    };
  })
  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
      debug: true,
      events: true,
      modules: [
        {
          name: 'ui.codemirror',
          module: true,
          files: [
            '../bower_components/angular-ui-codemirror/ui-codemirror.min.js'
          ]
        }, {
          name: 'wu.masonry',
          module: true,
          files: [
            '../bower_components/angular-masonry/angular-masonry.js'
          ]
        }
      ]
    });
  }])
  .factory('appCookie', function() {
    return function() {
      token: ''
    };
  })
  .service('config', function() {
    return {
      hasLogin: false,
      setLogin: function(bool) {
        this.hasLogin = bool;
      },
      username: ''
    };
  })
  .controller('IndexController', [
    '$scope', '$rootScope', '$state', '$cookieStore', 'config', 'breadcrumb', 
    function ($scope, $rootScope, $state, $cookieStore, config, breadcrumb) 
  {
    var self = this;
    self.hasLogin = config.hasLogin;
    self.config = config;
    self.parent = '';
    self.subject = '';
    self.toLogin = function() {
      $state.go('main.auth.login', {});
    };

    self.logout = function() {
      $cookieStore.remove('access_token');      
      self.toLogin();
    };

    self.linkto = function(link) {
      $state.go(link);
    };
    self.breadcrumb = breadcrumb;

    self.unAuthPaths = [
      'main.auth.login',
      'main.auth.register'
    ];

    $rootScope.$on('$stateChangeStart',
      function (event, toState, toParams, fromState, fromParams){
        var name = toState.name;
        var options = name.split('.');
        if (options.length === 2) {
          self.parent = options[1];
        } else if (options.length >= 3) {
          self.parent = options[1];
          self.subject = options[2];
        } else {
          self.parent = 'dashboard';
          self.subject = 'v1';
        }

        // Check wether login
        if (self.unAuthPaths.indexOf(name) < 0) {
          var token = $cookieStore.get('access_token');
          self.username = $cookieStore.get('username');
          if (!token || !self.username) {
            event.preventDefault();
            self.toLogin();
          }
        }
      }, $scope
    );


  }]);

  return app;
});
