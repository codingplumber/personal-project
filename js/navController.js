angular.module('app')
.controller('navController', function($scope) {

  $scope.openNav = function() {

    document.getElementById('myNav').style.width = "100%";

    // document.getElementById('main').style.position = '100%'
  };

  $scope.closeNav = function() {
    console.log('in closeNav function');
    document.getElementById('myNav').style.width = "0%";

    // document.getElementById('main').style.position = '0';
  };

});
