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
      templateUrl: './views/store.html'
    })
    .state('menu', {
      url: '/menu',
      templateUrl: './views/menu.html'
    })


});
