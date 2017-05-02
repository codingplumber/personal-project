angular.module('app')
.controller('mainCtrl', function($scope, productsSrvc) {

  $scope.test = 'controller working';
  $scope.test2 = mainSrvc.test;
  var test = 'test';

});
