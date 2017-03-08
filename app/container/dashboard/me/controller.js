define(['app'], function (app) {
  app.controller('DashboardMeController', ['breadcrumb', function(breadcrumb) {
    breadcrumb.title = 'Dashboard';
    breadcrumb.subTitle = 'Control panel';
    breadcrumb.list = [
      { name: 'Dashboard', link: 'main.dashboard.me'},
      { name: 'Mine' }
    ];

    var self = this;

    self.githubs = [ {
      name: 'Podou Admin',
      link: 'https://www.github.com/Podou/admin'
    }, {
      name: 'AdminLTE Angular',
      link: 'https://github.com/Quesle/AdminLTE/tree/angular'
    }, {
      name: 'Admin Plan',
      link: 'https://github.com/flyingSprite/adminPlan'
    }, {
      name: 'Spinelle',
      link: 'https://github.com/flyingSprite/spinelle'
    } ];

    self.matlabToturial = [ {
      name: 'MATLAB教學 - 01學習導覽',
      link: 'https://www.youtube.com/watch?v=KHFZLkm9qs0&index=1&list=PL1GnUASCCe_whzv3TLQJJjxDeC2WYxU8c'
    }, {
      name: 'MATLAB教學 - 02基本操作與矩陣輸入',
      link: 'https://www.youtube.com/watch?v=4ocHER25osU&index=2&list=PL1GnUASCCe_whzv3TLQJJjxDeC2WYxU8c'
    }, {
      name: 'MATLAB教學 - 03結構化程式與自定函數',
      link: 'https://www.youtube.com/watch?v=2a6eZT9TD2M'
    }, {
      name: 'MATLAB教學 - 04變數與檔案存取',
      link: 'https://www.youtube.com/watch?v=n8M7d-iXMUk'
    }, {
      name: 'MATLAB教學 - 05初階繪圖',
      link: 'https://www.youtube.com/watch?v=CNayChYLAV8'
    }, {
      name: 'MATLAB教學 - 06進階繪圖',
      link: 'https://www.youtube.com/watch?v=sPC1-7K6qNU'
    }, {
      name: 'MATLAB教學 - 07圖形介面(GUI)程式設計',
      link: 'https://www.youtube.com/watch?v=viwUcBYKBc4'
    }, {
      name: 'MATLAB教學 - 08影像處理(一)',
      link: 'https://www.youtube.com/watch?v=MwPgSz4Favw'
    }, {
      name: 'MATLAB教學 - 09影像處理(二)',
      link: 'https://www.youtube.com/watch?v=Rhg04LfCEOI'
    }, {
      name: 'MATLAB教學 - 10數值微積分',
      link: 'https://www.youtube.com/watch?v=rhNcguIpFW8'
    }, {
      name: 'MATLAB教學 - 11方程式求根',
      link: 'https://www.youtube.com/watch?v=O6ilfxV7rXo'
    }, {
      name: 'MATLAB教學 - 12線性方程式與線性系統',
      link: 'https://www.youtube.com/watch?v=TWVXIgA106c'
    }, {
      name: 'MATLAB教學 - 13統計',
      link: 'https://www.youtube.com/watch?v=WmsBHupOmPA'
    }, {
      name: 'MATLAB教學 - 14迴歸與內插',
      link: 'https://www.youtube.com/watch?v=t5Hgmp4cFOA'
    } ];
  }]);
});
