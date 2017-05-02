angular.module('app')
.directive('productsDirective', function(productsSrvc) {

  return {
    restrict: 'E',
    templateUrl: './views/productsDirective.html',
    controller: function($scope) {
      productsSrvc.getAllProducts().then(function(response) {
        $scope.products = response;
      })
    }

  }





});
