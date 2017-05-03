angular.module('app')
.controller('productsCtrl', function($scope, productsSrvc) {

  $scope.test = productsSrvc.test;
  $scope.test2 = 'controller working';

  $scope.getProductsByCategory = function() {
    console.log('in controller');
    productsSrvc.getProductsByCategory('featured').then(function(response) {
      console.log(response);
      $scope.products = response;
    })
  };
  $scope.getProductsByCategory();

  $scope.prods = true;

  $scope.getProductsByCategory = function(param) {
    // $scope.show = true
    console.log(param);
    // if (param === 'featured') {
      productsSrvc.getProductsByCategory(param).then(function(response) {
        $scope.products = response;
      })
    // } else if (param === 'men') {
    //   productsSrvc.getProductsByCategory(param).then(function(response) {
    //     $scope.products = response;
    //   })
    // } else if (param === 'women') {
    //   productsSrvc.getProductsByCategory(param).then(function(response) {
    //     $scope.products = response;
    //   })
    // } else if (param === 'hats') {
    //   productsSrvc.getProductsByCategory(param).then(function(response) {
    //     $scope.products = response;
    //   })
    // }
  }

  $scope.search = function(param) {
    productsSrvc.getAllProducts(param).then(function(response) {
      $scope.products = response;
      $scope.searchFilter = param;
      $scope.searchInput = '';
    });

  }

  $scope.showHide = function(param) {
    $scope.login = false;
    $scope.signup = false;
    $scope.prods = false;
    $scope.searchFilter = '';

    $scope[param] = true;
  }

  //CREATE USER
  $scope.createUser = (user) => {
    console.log(user);
    productsSrvc.createUser(user);
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
