define(['app'], function (app) {
  app.controller('MailboxInboxController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Mailbox Inbox';
    breadcrumb.subTitle = '13 new messages';
    breadcrumb.list = [
      { name: 'Mailbox', link: 'main.mailbox.inbox'},
      { name: 'Inbox' }
    ];
  }]);
});
