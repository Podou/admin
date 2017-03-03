define(['app'], function (app) {
  app.controller('MailboxReadController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Mailbox Read';
    breadcrumb.subTitle = '13 new messages';
    breadcrumb.list = [
      { name: 'Mailbox', link: 'main.mailbox.inbox'},
      { name: 'Read' }
    ];
  }]);
});
