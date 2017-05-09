angular.module('app')
.directive('carouselDirective2', function() {
  return {
    restrict: 'E',
    link: function(scope, elem, attrs) {



      $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          dots: false,
          centerMode: true,
          focusOnSelect: true,
          autoplay: true,
          autoplaySpeed: 3000
      });
    }
  }
});
