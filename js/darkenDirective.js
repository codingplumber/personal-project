angular.module('app')
.directive('darkenDirective', function() {

  return {
    restrict: 'A',
    link: function(scope, element, attribute) {
      $('.darken').hover(function() {
        $(this).fadeTo(500, 0.5);
      }, function() {
        $(this).fadeTo(500, 1);

      })
    }
  }

})
