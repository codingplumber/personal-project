angular.module('app')
.directive('navDirective', function() {

  return {
    restrict: 'A',
    templateUrl: './views/navDirective.html',
    controller: 'navController'
  }

});
