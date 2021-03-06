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
  });

  //test////////////////
  // .state('nav', {
  //   url: '/nav',
  //   templateUrl: './views/navDirective.html'
  // })

});
'use strict';

angular.module('app').directive('carouselArrow', function () {

  return {
    restrict: 'A',
    link: function link(scope, element, attribute) {
      $(window).scroll(function () {
        var winScroll = $(this).scrollTop();
        // console.log(winScroll);
        if (winScroll > 1062) {
          //1141
          element.css({
            'top': '379px' //513px
          });
        } else {
          element.css({
            'top': '50px'
          });
        }
      });
    }
  };
});
'use strict';

angular.module('app').directive('carouselDirective', function () {

  return {
    restrict: 'E',
    templateUrl: './views/carouselDirective.html'
  };
});
'use strict';

angular.module('app').directive('darkenDirective', function () {

  return {
    restrict: 'A',
    link: function link(scope, element, attribute) {
      $('.darken').hover(function () {
        $(this).fadeTo(500, 0.5);
      }, function () {
        $(this).fadeTo(500, 1);
      });
    }
  };
});
'use strict';

angular.module('app').directive('establishedDirective', function () {

  return {
    restrict: 'A',
    link: function link(scope, element, attribute) {
      $(window).scroll(function () {
        var winScroll = $(this).scrollTop();
        // console.log('established', winScroll);
        if (winScroll > 200) {
          element.css({
            'bottom': '169px'
          });
        } else {
          element.css({
            'bottom': '0px'
          });
        }
      });
    }
  };
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
    templateUrl: './views/navDirective.html',
    scope: {
      show: '='
    }
  };
});
'use strict';

angular.module('app').controller('storeCtrl', function ($scope, storeSrvc) {

  $scope.quantity = 1;

  $scope.zeroOutCart = function () {
    return $scope.cartTotal = 0;
  };

  $scope.getProductsByCategory = function () {
    storeSrvc.getProductsByCategory('featured').then(function (response) {
      $scope.products = response;
    });
  };
  $scope.getProductsByCategory();

  $scope.prods = true;

  $scope.getProductsByCategory = function (param) {
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
    storeSrvc.createUser(user).then(function (response) {
      user.first_name = '';
      user.last_name = '';
      user.email = '';
      user.password = '';
    });
  };

  // //VERIFY USER
  $scope.verifyLogin = function (returnUserEmail, returnUserPassword) {
    storeSrvc.login(returnUserEmail, returnUserPassword).then(function (response) {
      $scope.email = response.email;
      $scope.password = response.password;
      if (returnUserEmail === $scope.email && returnUserPassword === $scope.password) {
        $scope.isLoggedIn = true;
        $scope.userId = response.user_id;
        $scope.getCartTotal($scope.userId);
        $scope.showHide('prods');
      } else {
        // returnUserEmail = '';
        // returnUserPassword = '';
        alert('Password doesn\'t match email');
      }
    });
  };

  //CREATE ITEM IN CART
  $scope.createItem = function (quantity, purchase) {
    var user_id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : $scope.userId;

    storeSrvc.createItem(quantity, purchase, user_id).then(function (response) {
      $scope.getCartTotal($scope.userId);
      swal({
        title: "Sweet!",
        text: "Item added to cart.",
        imageUrl: "./sweetalert-master/example/images/thumbs-up.jpg",
        timer: 1000,
        showConfirmButton: false
      });
    });
  };

  //GET CART BY USER
  $scope.getCart = function () {
    var user_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $scope.userId;

    $scope.subtotal = 0;
    storeSrvc.getCart(user_id).then(function (response) {
      $scope.userCart = /*response;*/response.map(function (v) {

        v.total = v.quantity * v.product_price;
        $scope.subtotal += v.total;
        return v;
      });
    });
  };

  // TOTAL ITEMS IN CART
  $scope.getCartTotal = function () {
    var user_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $scope.userId;

    $scope.cartTotal = 0;
    storeSrvc.getCart(user_id).then(function (response) {
      $scope.cartTotal = response.reduce(function (acc, value) {
        return value.quantity + acc;
      }, 0);
    });
  };
  $scope.getCartTotal();

  // DELETE CART
  $scope.deleteCart = function () {
    storeSrvc.deleteCart().then(function (response) {
      swal({
        title: "Sweet!",
        text: "Thank you for your purchase!",
        imageUrl: "./sweetalert-master/example/images/thumbs-up.jpg",
        timer: 1000,
        showConfirmButton: false
      });
    });
  };
});
'use strict';

angular.module('app').service('storeSrvc', function ($http) {

  this.getAllProducts = function () {
    // console.log('in service');
    return $http({
      method: 'GET',
      url: '/read' //`${baseUrl} +  /read`
      // url: `${baseUrl}/read`
    }).then(function (response) {
      return response.data;
    });
  };

  // this.getOneProduct = function(product_id) {
  //   return $http({
  //     method: 'GET',
  //     url: `${baseUrl} + /read/ + ${product_id}`
  //   }).then(function(response) {
  //     return response;
  //   });
  // };

  this.getProductsByCategory = function (param) {
    return $http({
      method: 'GET',
      url: '/read/' + param
    }).then(function (response) {
      return response.data;
    });
  };

  //CREATE USER
  this.createUser = function (user) {
    return $http({
      method: 'POST',
      url: '/create/user',
      data: { user: user }
    }).then(function (response) {
      return response;
    });
  };

  //GET USER FOR VERIFICATION
  this.login = function (email, password) {
    return $http({
      method: 'POST',
      url: '/login',
      data: {
        email: email,
        password: password
      }
    }).then(function (response) {
      return response.data[0];
    });
  };

  //CREATE ITEMS IN CART
  this.createItem = function (quantity, purchase, user_id) {
    return $http({
      method: 'POST',
      url: '/create/cart',
      data: {
        quantity: quantity,
        purchase: purchase,
        user_id: user_id
      }
    }).then(function (response) {
      return response;
    });
  };
  // .then(response => response);

  //GET CART BY USER
  this.getCart = function (user) {
    return $http({
      method: 'POST',
      url: '/user/cart',
      data: { user: user }
    }).then(function (response) {
      return response.data;
    });
  };

  // DELETE CART
  this.deleteCart = function () {
    return $http({
      method: 'DELETE',
      url: '/destroy/cart'
    }).then(function (response) {
      return response.data;
    });
  };
});
//# sourceMappingURL=bundle.js.map
