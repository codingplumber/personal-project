angular.module('app')
.directive('carouselArrow', function() {

  return {
    restrict: 'A',
    link: function(scope, element, attribute) {
      $(window).scroll(function() {
        let winScroll = $(this).scrollTop();
        // console.log(winScroll);
        if (winScroll > 1062) { //1141
          element.css({
            'top': '379px'  //513px
          })
        } else {
          element.css({
            'top': '50px'
          })
        }
      })
    }
  }

})
