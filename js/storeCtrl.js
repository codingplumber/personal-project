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

  $scope.getProductToPurchase = function(id) {
    $scope.login = false;
    $scope.signup = false;
    $scope.prods = false;
    $scope.cart = false;
    $scope.item = true;
    $scope.product = $scope.products.filter((item) => id == item.product_id);
    console.log($scope.product);
  };

  $scope.showHide = function(param) {
    $scope.login = false;
    $scope.signup = false;
    $scope.prods = false;
    $scope.cart = false;
    $scope.item = false;
    $scope.searchFilter = '';

    $scope[param] = true;
  };

  //CREATE USER
  $scope.createUser = (user) => {
    console.log(user, 'in ctrl');
    storeSrvc.createUser(user).then(function(response) {
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
  $scope.createItem = (item) => {
    storeSrvc.createItem(item).then(function(response) {

    });
  };


})
