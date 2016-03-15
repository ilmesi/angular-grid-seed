(function () {
    'use strict';

    var core = angular.module('app.core');

    var config = {
        appErrorPrefix: '[grid-project Error] ',
        appTitle: 'Grid-project'
    };

    core.value('config', config);

    core.config(configure);

    configure.$inject = ['$logProvider', 'routerHelperProvider'];
    function configure($logProvider, routerHelperProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        routerHelperProvider.configure({docTitle: config.appTitle + ': '});
    }

})();
