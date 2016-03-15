(function () {
    'use strict';

    angular
        .module('app.home')
        .factory('homeDataFactory', homeDataFactory);

    /* @ngInject */
    function homeDataFactory() {
        var service = {
            getItems: getItems
        };

        return service;

        function getItems() {
            return [
                {
                    width: 684,
                    height: 1024,
                    url: 'http://placehold.it/684x1024',
                    title: 'A beautiful sunshine',
                    likes: 30,
                    watch: 204
                },
                {
                    width: 481,
                    height: 720,
                    url: 'http://placehold.it/481x720',
                    title: 'Lets play hide and seek',
                    likes: 51,
                    watch: 1015
                },
                {
                    width: 396,
                    height: 499,
                    url: 'http://placehold.it/396x499',
                    title: 'Climbing mountains',
                    likes: 35,
                    watch: 600
                },
                {
                    width: 684,
                    height: 1024,
                    url: 'http://placehold.it/684x1024',
                    title: 'A beautiful sunshine 2',
                    likes: 30,
                    watch: 204
                },
                {
                    width: 481,
                    height: 720,
                    url: 'http://placehold.it/481x720',
                    title: 'Lets play hide and seek 3',
                    likes: 51,
                    watch: 1015
                },
                {
                    width: 396,
                    height: 499,
                    url: 'http://placehold.it/396x499',
                    title: 'Climbing mountains 4',
                    likes: 35,
                    watch: 600
                },
                {
                    width: 300,
                    height: 500,
                    url: 'http://placehold.it/300x500',
                    title: 'Lets play hide and seek',
                    likes: 51,
                    watch: 1015
                },
                {
                    width: 500,
                    height: 300,
                    url: 'http://placehold.it/500x300',
                    title: 'Climbing mountains',
                    likes: 35,
                    watch: 600
                }
            ];
            /*
            return $http.get('/api/people')
                .then(success)
                .catch(fail);
            function success(response) {
                return response.data;
            }
            function fail(e) {
                return exception.catcher('XHR Failed for getPeople')(e);
            }
            */
        }
    }
})();