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

})
