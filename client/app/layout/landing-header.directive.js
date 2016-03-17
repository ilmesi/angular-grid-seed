(function () {
    'use strict';

    angular
        .module('app.layout')
        .directive('landingHeader', landingHeader);

    landingHeader.$inject = ['$window'];

    /* @ngInject */
    function landingHeader($window) {
      var directive = {
          bindToController: true,
          link: link,
          controllerAs: 'vm',
          restrict: 'E',
          templateUrl: 'app/layout/landing-header.html'
      };
      return directive;

      function link(scope, element, attrs) {
        var $win = angular.element($window);

        $win.on('scroll', function (e) {
            if ($win.scrollTop() >= 274) {
              element.addClass('header-down');
            } else {
              element.removeClass('header-down');
            }
        });
      }
    }
})();