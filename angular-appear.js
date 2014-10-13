angular.module('l42y.appear', [
]).directive('appear', function (
  $window
) {
  return {
    scope: true,
    restrict: 'EA',
    controller: function ($scope, $element, $attrs) {
      var self = this;

      evalOrSet($element[0]);
      angular.element($window).on('DOMContentLoaded load resize scroll', handler);
      $element.on('load', handler);

      function handler () {
        $scope.$apply(function () {
          evalOrSet($element[0]);
        });
      }

      function evalOrSet (element) {
        if ($window.verge.inViewport(element)) {
          if (!!$attrs.appear) {
            $scope.$eval($attrs.appear);
          } else {
            self.isAppeared = $window.verge.inViewport($element[0]);
          }
        }
      }
    },
    controllerAs: 'appear'
  };
});
