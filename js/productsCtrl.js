angular.module('app')
.controller('productsCtrl', function($scope, productsSrvc) {

  $scope.test = productsSrvc.test;
  $scope.test2 = 'controller working';

  $scope.getAllProducts = function() {
    console.log('in controller');
    productsSrvc.getAllProducts().then(function(response) {
      console.log(response);
      $scope.products = response;
    })
  };
  $scope.getAllProducts();

  $scope.showHide = function(param) {
    $scope.show = true
    console.log(param);
    if (param === 'featured') {
      productsSrvc.getProductsByCategory(param).then(function(response) {
        $scope.products = response;
      })
    } else if (param === 'men') {
      productsSrvc.getProductsByCategory(param).then(function(response) {
        $scope.products = response;
      })
    } else if (param === 'women') {
      productsSrvc.getProductsByCategory(param).then(function(response) {
        $scope.products = response;
      })
    } else if (param === 'hats') {
      productsSrvc.getProductsByCategory(param).then(function(response) {
        $scope.products = response;
      })
    }
  }

  //CREATE USER
  $scope.createUser = (user) => {
    productsSrvc.createUser(user);
    user.first_name = '';
    user.last_name = '';
    user.email = '';
    user.password = '';
  }


})
