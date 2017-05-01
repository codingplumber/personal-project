'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './views/home.html'
  }).state('featured', {
    url: '/store',
    templateUrl: './views/store.html'
  }).state('menu', {
    url: '/menu',
    templateUrl: './views/menu.html'
  })

  //test////////////////
  .state('nav', {
    url: '/nav',
    templateUrl: './views/navDirective.html'
  });
});
'use strict';

angular.module('app').directive('footerDirective', function () {

  return {
    restrict: 'E',
    templateUrl: './views/footerDirective.html'
  };
});
'use strict';

angular.module('app').directive('headerMenuDirective', function () {

  return {
    restrict: 'E',
    templateUrl: './views/headerMenuDirective.html'
  };
});
'use strict';

angular.module('app').directive('headerStoreDirective', function () {

  return {
    restrict: 'E',
    templateUrl: './views/headerStoreDirective.html'
  };
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, mainSrvc) {

  $scope.test = 'controller working';
  $scope.test2 = mainSrvc.test;
  var test = 'test';
});
'use strict';

angular.module('app').service('mainSrvc', function () {

  this.test = 'service working';
});
'use strict';

angular.module('app').directive('navDirective', function () {

  return {
    restrict: 'E',
    templateUrl: './views/navDirective.html'
  };
});
'use strict';

angular.module('app').directive('storeDirective', function () {

  return {
    restrict: 'E',
    templateUrl: './views/storeDirective.html'
  };
});
//# sourceMappingURL=bundle.js.map
