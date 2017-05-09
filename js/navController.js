angular.module('app')
.controller('navController', function($scope) {

  $scope.openNav = function() {

    document.getElementById('mySideNav').style.position = '100%'

    // document.getElementById('main').style.position = '100%'
  };

  $scope.closeNav = function() {

    document.getElementById('mySideNav').style.position = '0';

    // document.getElementById('main').style.position = '0';
  };

});
