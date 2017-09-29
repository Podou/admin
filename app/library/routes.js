define('routes', function() {
  var startUrl = 'app/';
  function getName(names) {
    var name = '';
    for (var i in names) {
      value = names[i];
      name += value.replace(/(\w)/,function(v){return v.toUpperCase()});
    }
    return name;
  }
  function getRouter(route, name, title) {
    route = route || [];
    var uiSref = 'main.' + route.join('.');
    if (name === 'index') {
      uiSref += '.index';
    }
    return {
      title: title,
      name: name,
      uiSref: uiSref,
      templateUrl: startUrl + 'container/' + route.join('/') + '/index.html',
      controller: getName(route) + 'Controller',
      controllerUrl: startUrl + 'container/'+ route.join('/') + '/controller.js'
    };
  }
  return [
    getRouter([ 'dashboard', 'v1' ], 'v1', 'v1'),
    getRouter([ 'dashboard', 'v2' ], 'v2', 'v2'),
    getRouter([ 'dashboard', 'me' ], 'me', 'Mine'),

    getRouter([ 'forum' ], 'index', 'Forum'),
    getRouter([ 'widget' ], 'index', 'Widget'),
    getRouter([ 'version' ], 'index', 'Version'),

    getRouter([ 'charts', 'chartjs' ], 'chartjs', 'Chart.js'),
    getRouter([ 'charts', 'flot' ], 'flot', 'Flot.js'),
    getRouter([ 'charts', 'inline' ], 'inline', 'Inline'),
    getRouter([ 'charts', 'morris' ], 'morris', 'Morris'),
    getRouter([ 'charts', 'pie' ], 'pie', 'Pie Charts'),

    getRouter([ 'ui', 'buttons' ], 'buttons', 'Buttons'),
    getRouter([ 'ui', 'general' ], 'general', 'General'),
    getRouter([ 'ui', 'icons' ], 'icons', 'Icons'),
    getRouter([ 'ui', 'modals' ], 'modals', 'Modals'),
    getRouter([ 'ui', 'sliders' ], 'sliders', 'Sliders'),
    getRouter([ 'ui', 'timeline' ], 'timeline', 'Timeline'),

    getRouter([ 'project', 'game' ], 'game', 'Game'),

    getRouter([ 'forms', 'advanced' ], 'advanced', 'Advanced'),
    getRouter([ 'forms', 'editors' ], 'editors', 'Editors'),
    getRouter([ 'forms', 'general' ], 'general', 'General'),
    getRouter([ 'forms', 'text' ], 'text', 'Text'),

    getRouter([ 'table', 'data' ], 'data', 'Data'),
    getRouter([ 'table', 'simple' ], 'simple', 'Simple'),

    getRouter([ 'mailbox', 'compose' ], 'compose', 'Compose'),
    getRouter([ 'mailbox', 'inbox' ], 'inbox', 'Inbox'),
    getRouter([ 'mailbox', 'read' ], 'read', 'Read'),

    getRouter([ 'calendar' ], 'index', 'Calendar'),

    getRouter([ 'example', '404' ], '404', '404'),
    getRouter([ 'example', '500' ], '500', '500'),
    getRouter([ 'example', 'blank' ], 'blank', 'Blank'),
    getRouter([ 'example', 'invoice' ], 'invoice', 'Invoice'),
    getRouter([ 'example', 'profile' ], 'profile', 'Profile'),
    getRouter([ 'example', 'pace' ], 'pace', 'Pace'),

    getRouter([ 'auth', 'login' ], 'login', 'Login'),
    getRouter([ 'auth', 'register' ], 'register', 'Register')
  ];
});
