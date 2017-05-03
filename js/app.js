angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html'
    })
    .state('featured', {
      url: '/store',
      templateUrl: './views/store.html',
      controller: 'storeCtrl'
    })
    .state('menu', {
      url: '/menu',
      templateUrl: './views/menu.html'
    })

    //test////////////////
    .state('nav', {
      url: '/nav',
      templateUrl: './views/navDirective.html'
    })


});
