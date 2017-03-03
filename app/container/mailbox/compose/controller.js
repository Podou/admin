define(['app'], function (app) {
  app.controller('MailboxComposeController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Mailbox Compose';
    breadcrumb.subTitle = '13 new messages';
    breadcrumb.list = [
      { name: 'Mailbox', link: 'main.mailbox.inbox'},
      { name: 'Compose' }
    ];
  }]);
});
