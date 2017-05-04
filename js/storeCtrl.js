angular.module('app')
.controller('storeCtrl', function($scope, storeSrvc) {

  $scope.test = storeSrvc.test;
  $scope.test2 = 'controller working';
  $scope.currentItem = {}; //what is this for?
  $scope.quantity = '';

  $scope.getProductsByCategory = function() {
    // console.log('in controller');
    storeSrvc.getProductsByCategory('featured').then(function(response) {
      // console.log(response);
      $scope.products = response;
    })
  };
  $scope.getProductsByCategory();

  $scope.prods = true;

  $scope.getProductsByCategory = function(param) {
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
    // console.log($scope.product);
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
  $scope.verifyLogin = function(returnUserEmail, returnUserPassword) {
    console.log(returnUserEmail, returnUserPassword);
    storeSrvc.login(returnUserEmail, returnUserPassword).then(function(response) {
      console.log(response);
      $scope.email = response.email;
      $scope.password = response.password;
      if (returnUserEmail === $scope.email && returnUserPassword === $scope.password) {
        //what to do here......??
        alert('HELLO');
        $scope.isLoggedIn = true;
        $scope.userId = response.user_id;
        $scope.showHide('prods');
      }
      alert('Password doesn\'t match email');
    });
  };

  //CREATE ITEM IN CART
  $scope.createItem = (quantity, purchase, user_id = $scope.userId) => {

    console.log(purchase);
    storeSrvc.createItem(quantity, purchase, user_id).then(function(response) {
      console.log(response);
    });
  };


})
