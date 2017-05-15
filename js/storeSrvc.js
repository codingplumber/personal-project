angular.module('app')
.service('storeSrvc', function($http) {

  this.getAllProducts = function() {
    console.log('in service');
    return $http({
      method: 'GET',
      url: '/read'//`${baseUrl} +  /read`
      // url: `${baseUrl}/read`
    }).then(function(response) {
      return response.data;
    });
  };

  // this.getOneProduct = function(product_id) {
  //   return $http({
  //     method: 'GET',
  //     url: `${baseUrl} + /read/ + ${product_id}`
  //   }).then(function(response) {
  //     return response;
  //   });
  // };

  this.getProductsByCategory = function(param) {
    return $http({
      method: 'GET',
      url: '/read/' + param
    }).then(function(response) {
      return response.data;
    });
  };

  //CREATE USER
  this.createUser = (user) => {
    return $http({
      method: 'POST',
      url: '/create/user',
      data: {user}
    }).then((response) => {
      return response;
    });
  };

  //GET USER FOR VERIFICATION
  this.login = (email, password) => {
    return $http({
      method: 'POST',
      url: '/login',
      data: {
        email,
        password
      }
    }).then((response) => {
      return response.data[0];
    });
  };

  //CREATE ITEMS IN CART
  this.createItem = (quantity, purchase, user_id) => {
    return $http({
      method: 'POST',
      url: '/create/cart',
      data: {
        quantity,
        purchase,
        user_id
      }
    }).then((response) => {
      return response;
    });
  };
// .then(response => response);

  //GET CART BY USER
  this.getCart = (user) => {
    console.log('get cart for ', user);
    return $http({
      method: 'POST',
      url: '/user/cart',
      data: {user}
    }).then((response) => {
      return response.data;
    });
  };

  // DELETE CART
  this.deleteCart = () => {
    return $http({
      method: 'DELETE',
      url: '/destroy/cart',
    }).then((response) => {
      return response.data;
    });
  };


});
