(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    //DashboardController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function HomeController() {
        var vm = this;
        vm.tururu = 'HOMEE';
    }
})();