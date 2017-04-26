angular.module('app')
.comtroller('mainCtrl', function($scope, mainSrvc) {

  $scope.test = 'controller working';
  $scope.test2 = mainSrvc.test;

});
