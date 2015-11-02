(function () {
  "use strict";

  angular.module('App.states', []).
  config(['$stateProvider', '$urlRouteProvider', function ($stateProvider, $urlRouteProvider) {
    $urlRouteProvider.otherwise('/');

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

  var dependencies = ['ngRoute',
                      'App.constants', 'App.services', 'App.controllers', 'App.states'];

  var app = angular.module('teamPickerApp', dependencies);




//   app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
//   	$routeProvider.
//       when('/', {
//         templateUrl: 'partials/teamSelect',
//         controller: 'TeamSelectCtrl'
//       }).
//       when('/teamName', {
//         templateUrl: 'partials/teamName',
//         controller: 'TeamNameCtrl'
//       }).
//       otherwise({
//         redirectTo: '/'
//       });

//     $locationProvider.html5Mode(true);
//   }]);

}());