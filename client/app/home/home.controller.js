(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['homeDataFactory'];
    /* @ngInject */
    function HomeController(homeDataFactory) {
        var vm = this;
        
        var items = homeDataFactory.getItems();
        vm.items = items.concat([]);    
    }
})();