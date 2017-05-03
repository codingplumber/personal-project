'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './views/home.html'
  }).state('featured', {
    url: '/store',
    templateUrl: './views/store.html',
    controller: 'productsCtrl'
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

angular.module('app').controller('mainCtrl', function ($scope, productsSrvc) {

  $scope.test = 'controller working';
  $scope.test2 = mainSrvc.test;
  var test = 'test';
});
'use strict';

angular.module('app').directive('navDirective', function () {

  return {
    restrict: 'E',
    templateUrl: './views/navDirective.html'
  };
});
'use strict';

angular.module('app').controller('productsCtrl', function ($scope, productsSrvc) {

  $scope.test = productsSrvc.test;
  $scope.test2 = 'controller working';

  $scope.getAllProducts = function () {
    console.log('in controller');
    productsSrvc.getAllProducts().then(function (response) {
      console.log(response);
      $scope.products = response;
    });
  };
  $scope.getAllProducts();

  $scope.showHide = function (param) {
    $scope.show = true;
    console.log(param);
    if (param === 'featured') {
      mainService.getProductsByCategory(param).then(function (response) {
        $scope.products = response;
      });
    } else if (param === 'mens') {
      mainService.getProductsByCategory(param).then(function (response) {
        $scope.products = response;
      });
    } else if (param === 'womens') {
      mainService.getProductsByCategory(param).then(function (response) {
        $scope.products = response;
      });
    } else if (param === 'hats') {
      mainService.getProductsByCategory(param).then(function (response) {
        $scope.products = response;
      });
    }
  };
  // $scope.showHide(param);

});
'use strict';

angular.module('app').directive('productsDirective', function (productsSrvc) {

  return {
    restrict: 'E',
    templateUrl: './views/productsDirective.html',
    controller: function controller($scope) {
      productsSrvc.getAllProducts().then(function (response) {
        $scope.products = response;
      });
    }

  };
});
'use strict';

angular.module('app').service('productsSrvc', function ($http) {

  this.test = 'service working';

  var baseUrl = 'http://localhost:3000';

  this.getAllProducts = function () {
    console.log('in service');
    return $http({
      method: 'GET',
      url: baseUrl + '/read' //`${baseUrl} + /read`
    }).then(function (response) {
      return response.data;
    });
  };

  this.getOneProduct = function (product_id) {
    return $http({
      method: 'GET',
      url: baseUrl + ' + /read/ + ' + product_id
    }).then(function (response) {
      return response;
    });
  };

  this.getProductsByCategory = function (param) {
    return $http({
      method: 'GET',
      url: baseUrl + '/read/' + param
    }).then(function (response) {
      return response.data.product_category;
    });
  };
});
//# sourceMappingURL=bundle.js.map
