angular.module('app')
.controller('storeCtrl', function($scope, storeSrvc) {

  $scope.test = storeSrvc.test;
  $scope.test2 = 'controller working';
  $scope.currentItem = {}; //what is this for?

  $scope.getProductsByCategory = function() {
    console.log('in controller');
    storeSrvc.getProductsByCategory('featured').then(function(response) {
      console.log(response);
      $scope.products = response;
    })
  };
  $scope.getProductsByCategory();

  $scope.prods = true;

  $scope.getProductsByCategory = function(param) {
    console.log(param);
    storeSrvc.getProductsByCategory(param).then(function(response) {
      $scope.products = response;
    })

  };

  $scope.search = function(param) {
    storeSrvc.getAllProducts(param).then(function(response) {
      $scope.products = response;
      $scope.searchFilter = param;
      $scope.searchInput = '';
    });

  };

  // $scope.getSingleProduct = function(ele_id) {
  //   var element = document.getElementById(ele_id);
  //   console.log(element);
  //   storeSrvc.getAllProducts().then(function(response) {
  //     $scope.products = response;
  //     console.log(response);
  //     for (var i = 0; i < response.length; i++) {
  //       if (response[i].product_id === element) {
  //         $scope.singleProduct = response[i];
  //       }
  //     }
  //   });
  // }
  // $scope.getSingleProduct();

  // $scope.getProductToPurchase = function(param) {
  //   $scope.login = false;
  //   $scope.signup = false;
  //   $scope.prods = false;
  //   $scope.cart = false;
  //   $scope.item = false;
  //   $scope[param] = true;
  //   console.log(param[3]);
  //   storeSrvc.getAllProducts().then(function(response) {
  //     $scope.products = response;
  //     // console.log($scope.products.product_image);
  //     for (var i = 0; i < response.length; i++) {
  //       if (response[i].product_id === $scope.products[i].product_id) {
  //         // console.log($scope.products[i].product_image);
  //       }
  //     }
  //   })
  //
  // };

  $scope.showHide = function(param) {
    $scope.login = false;
    $scope.signup = false;
    $scope.prods = false;
    $scope.cart = false;
    $scope.searchFilter = '';

    $scope[param] = true;
  };

  //CREATE USER
  $scope.createUser = (user) => {
    console.log(user);
    storeSrvc.createUser(user);
    user.first_name = '';
    user.last_name = '';
    user.email = '';
    user.password = '';
  };

  // //VERIFY USER
  // $scope.verifyUser = (returnUser) => {
  //   if (returnUser.email === $scope.email && returnUser.passord === $scope.password) {
  //     //what to do here......??
  //   }
  //   alert('Password doesn\'t match email');
  // }


})
