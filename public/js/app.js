(function () {
  "use strict";

  var dependencies = ['ngRoute', 'App.controllers', 'App.constants'];

  var app = angular.module('teamPickerApp', dependencies);

  app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  	$routeProvider.
      when('/', {
        templateUrl: 'partials/teamSelect',
        controller: 'TeamSelectCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  }]);

}());