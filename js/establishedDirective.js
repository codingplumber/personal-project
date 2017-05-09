angular.module('app')
.directive('establishedDirective', function() {

  return {
    restrict: 'A',
    link: function(scope, element, attribute) {
      $(window).scroll(function() {
        let winScroll = $(this).scrollTop();
        // console.log(winScroll);
        if (winScroll > 200) {
          element.css({
            'bottom': '169px'
          })
        } else {
          element.css({
            'bottom': '0px'
          })
        }
      })
    }
  }

})
