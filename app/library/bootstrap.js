
/**
 * About error message:
 * Load timeout for modules: domReady!_unnormalized2,domReady!
 * See:
 * https://github.com/requirejs/domReady/issues/3
 * https://github.com/requirejs/requirejs/issues/398
 */

define('bootstrap', ['domReady', 'angular-package', 'app', 'ngRoute', 'framework'], function (domReady){
  'use strict';

  // require(['domReady!'], function (document) {
  //   // This ngApp must be angular.module('ngApp', [])
  //   angular.bootstrap(document, ['ngApp']);
  // });
  domReady(function(document) {
    angular.bootstrap(document, ['ngApp']);
  });
});
