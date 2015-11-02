(function () {
  "use strict";

  angular.module('App.states', ['ui.router']).
  config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.
      state('root', {
        url: '/',
        templateUrl: 'partials/teamSelect',
        controller: 'TeamSelectCtrl'
      }).
      state('team', {
        url: '/teamName',
        templateUrl: 'partials/teamName',
        controller: 'TeamNameCtrl'
      });
  }]);

}());