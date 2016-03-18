(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['homeDataFactory'];
    /* @ngInject */
    function HomeController(homeDataFactory) {
        var vm = this;
        
        //var items = homeDataFactory.getItems();
        //vm.items = items.concat([]);
        vm.items = [
            { src: 'http://lorempixel.com/g/280/280', title:'Test 1' },
            { src: 'http://lorempixel.com/g/280/280', title:'Test 2' },
            { src: 'http://lorempixel.com/g/280/280', title:'Test 3' },
            { src: 'http://lorempixel.com/g/280/280', title:'Test 4' },
            { src: 'http://lorempixel.com/g/280/280', title:'Test 5' },
            { src: 'http://lorempixel.com/g/280/280', title:'Test 6' },
            { src: 'http://lorempixel.com/g/280/280', title:'Test 7' }
        ];
    }
})();