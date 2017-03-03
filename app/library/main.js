
require.config({
  baseUrl: '',
  paths:{
    'angular-package': 'dist/lib/angular.lib.min',
    'framework': 'dist/lib/framework.min'
  },
  shim: {
    'angular-package': {exports: 'angular'}
  },
  deps: ['bootstrap']
});
