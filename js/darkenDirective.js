angular.module('app')
.directive('darkenDirective', function() {

  return {
    restrict: 'A',
    link: function(scope, element, attribute) {
      $('.darken').hover(function() {
        $(this).fadeTo(500, 0.5);
      }, function() {
        $(this).fadeTo(500, 1);

        // element.css({
        //   'background':
        //     'linear-gradient(
        //       rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)
        //     ),
        //     url(./images/home/Dry Bean image.jpg)'
        // })

        // element.css({
        //   'z-index': '1',
        //   'background': 'rgba(0, 0, 0, 0.5)'
        // })

      })
    }
  }

})
