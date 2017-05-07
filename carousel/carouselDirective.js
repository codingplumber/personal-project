angular.module('app').directive('carouselDirective', function(){

  return {
    restrict: 'E',
    templateUrl: './views/carouselDirective.html',
    controller: 'carouselCtrl',
    scope:{
      bgColor: '='
    },
    link: function(scope, element, attribute){
      $('.inner-slide').css({"width": scope.bgColor})
    }
  }

});
