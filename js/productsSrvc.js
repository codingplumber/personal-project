angular.module('app')
.service('productsSrvc', function($http) {

  this.test = 'service working';

  const baseUrl = 'http://localhost:3000'

  this.getAllProducts = function() {
    console.log('in service');
    return $http({
      method: 'GET',
      url: baseUrl + '/read'//`${baseUrl} + /read`
    }).then(function(response) {
      return response.data;
    });
  };

  this.getOneProduct = function(product_id) {
    return $http({
      method: 'GET',
      url: `${baseUrl} + /read/ + ${product_id}`
    }).then(function(response) {
      return response;
    });
  };

  this.getProductsByCategory = function(param) {
    return $http({
      method: 'GET',
      url: baseUrl + '/read/' + param
    }).then(function(response) {
      return response.data.product_category;
    })
  }


});
