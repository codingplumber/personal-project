'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './views/home.html'
  }).state('featured', {
    url: '/store',
    templateUrl: './views/store.html',
    controller: 'storeCtrl'
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

angular.module('app').controller('mainCtrl', function ($scope, storeSrvc) {

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

angular.module('app').controller('storeCtrl', function ($scope, storeSrvc) {

  $scope.test = storeSrvc.test;
  $scope.test2 = 'controller working';
  $scope.currentItem = {}; //what is this for?

  $scope.getProductsByCategory = function () {
    console.log('in controller');
    storeSrvc.getProductsByCategory('featured').then(function (response) {
      console.log(response);
      $scope.products = response;
    });
  };
  $scope.getProductsByCategory();

  $scope.prods = true;

  $scope.getProductsByCategory = function (param) {
    console.log(param);
    storeSrvc.getProductsByCategory(param).then(function (response) {
      $scope.products = response;
    });
  };

  $scope.search = function (param) {
    storeSrvc.getAllProducts(param).then(function (response) {
      $scope.products = response;
      $scope.searchFilter = param;
      $scope.searchInput = '';
    });
  };

  $scope.getProductToPurchase = function (id) {
    $scope.login = false;
    $scope.signup = false;
    $scope.prods = false;
    $scope.cart = false;
    $scope.item = true;
    $scope.product = $scope.products.filter(function (item) {
      return id == item.product_id;
    });
    console.log($scope.product);
  };

  $scope.showHide = function (param) {
    $scope.login = false;
    $scope.signup = false;
    $scope.prods = false;
    $scope.cart = false;
    $scope.item = false;
    $scope.searchFilter = '';

    $scope[param] = true;
  };

  //CREATE USER
  $scope.createUser = function (user) {
    console.log(user, 'in ctrl');
    storeSrvc.createUser(user).then(function (response) {
      user.first_name = '';
      user.last_name = '';
      user.email = '';
      user.password = '';
    });
  };

  // //VERIFY USER
  // $scope.verifyUser = (returnUser) => {
  //   if (returnUser.email === $scope.email && returnUser.passord === $scope.password) {
  //     //what to do here......??
  //   }
  //   alert('Password doesn\'t match email');
  // }

  //CREATE ITEM IN CART
  $scope.createItem = function (item) {
    storeSrvc.createItem(item).then(function (response) {});
  };
});
'use strict';

angular.module('app').service('storeSrvc', function ($http) {

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
      return response.data;
    });
  };

  //CREATE USER
  this.createUser = function (user) {
    console.log(user, 'in srvc');
    return $http({
      method: 'POST',
      url: '/create/user',
      data: user
    }).then(function (response) {
      return response;
    });
  };

  //GET USER FOR VERIFICATION
  this.getUser = function (returnUserEmail, returnUserPassword) {
    return $http({
      method: 'GET',
      url: 'read/user/' + returnUserEmail + '/' + returnUserPassword
    }).then(function (res) {
      return response.data;
    });
  };

  //CREATE ITEMS IN CART
  this.createItem = function (item) {
    return $http({
      method: 'POST',
      url: '/create/cart',
      data: item
    }).then(function (response) {
      return response;
    });
  };
});
//# sourceMappingURL=bundle.js.map
