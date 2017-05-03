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
      mainService.getProductsByCategory(param).then(function(response) {
        $scope.products = response;
      })
    } else if (param === 'mens') {
      mainService.getProductsByCategory(param).then(function(response) {
        $scope.products = response;
      })
    } else if (param === 'womens') {
      mainService.getProductsByCategory(param).then(function(response) {
        $scope.products = response;
      })
    } else if (param === 'hats') {
      mainService.getProductsByCategory(param).then(function(response) {
        $scope.products = response;
      })
    }
  }
  // $scope.showHide(param);


})
