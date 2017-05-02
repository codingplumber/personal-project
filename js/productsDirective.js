angular.module('app')
.directive('productsDirective', function() {

  return {
    restrict: 'E',
    templateUrl: './views/productsDirective.html',
    controller: function($scope, productsSrvc) {
      productsSrvc.getAllProducts().then(function(response) {
        $scope.products = response;
      })
    }

  }





});
