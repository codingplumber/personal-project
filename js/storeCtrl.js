angular.module('app')
.controller('storeCtrl', function($scope, storeSrvc) {

  $scope.quantity = 1;

  $scope.zeroOutCart = () => {return $scope.cartTotal = 0};

  $scope.getProductsByCategory = function() {
    storeSrvc.getProductsByCategory('featured').then(function(response) {
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
    storeSrvc.createUser(user).then(function(response) {
      user.first_name = '';
      user.last_name = '';
      user.email = '';
      user.password = '';
    });
  };

  // //VERIFY USER
  $scope.verifyLogin = function(returnUserEmail, returnUserPassword) {
    storeSrvc.login(returnUserEmail, returnUserPassword).then(function(response) {
      $scope.email = response.email;
      $scope.password = response.password;
      if (returnUserEmail === $scope.email && returnUserPassword === $scope.password) {
        $scope.isLoggedIn = true;
        $scope.userId = response.user_id;
        $scope.getCartTotal($scope.userId);
        $scope.showHide('prods');
      } else {
        // returnUserEmail = '';
        // returnUserPassword = '';
        alert('Password doesn\'t match email');
      }
    });
  };

  //CREATE ITEM IN CART
  $scope.createItem = (quantity, purchase, user_id = $scope.userId) => {
    storeSrvc.createItem(quantity, purchase, user_id).then(function(response) {
      $scope.getCartTotal($scope.userId);
      swal({
        title: "Sweet!",
        text: "Item added to cart.",
        imageUrl: "./sweetalert-master/example/images/thumbs-up.jpg",
        timer: 1000,
        showConfirmButton: false
      });
    });
  };

  //GET CART BY USER
  $scope.getCart = (user_id = $scope.userId) => {
    $scope.subtotal = 0;
    storeSrvc.getCart(user_id).then((response) => {
      $scope.userCart = /*response;*/ response.map(v=>{

        v.total = v.quantity * v.product_price
        // console.log('v.total is ', v.total);
        $scope.subtotal += v.total
        // console.log('subtotal is ', $scope.subtotal);
        return v
      })
      // console.log($scope.userCart);
    })
  }

  // TOTAL ITEMS IN CART
  $scope.getCartTotal = (user_id = $scope.userId) => {
    $scope.cartTotal = 0;
    storeSrvc.getCart(user_id).then((response) => {
      $scope.cartTotal = response.reduce((acc, value) => {
        return value.quantity + acc;
      }, 0)
    })
  }
  $scope.getCartTotal();

  // DELETE CART
  $scope.deleteCart = () => {
    storeSrvc.deleteCart().then((response) => {
      swal({
        title: "Sweet!",
        text: "Thank you for your purchase!",
        imageUrl: "./sweetalert-master/example/images/thumbs-up.jpg",
        timer: 1000,
        showConfirmButton: false
      });
    });
  };

});
