angular.module('app').controller('carouselCtrl',function($scope,carouselSrvc){

 $scope.myInterval = 4000;
 $scope.active = 0;
 $scope.slides = carouselSrvc.getImages();
 var currIndex = 0;

});
