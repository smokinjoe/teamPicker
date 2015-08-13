(function () {
  "use strict";

  angular.module('App.constants', []);

  var WHOLE_OFFICE = [
    'Joe', 'Manny', 'Michael', 'Vengadesh', 'Pankaj', 'Sunil', 'Max', 'Roman', 'Audrey', 'Sohail', 'Scott', 'Stephen', 'Bobby'
  ];

  angular.module('App.constants')
  .constant('WHOLE_OFFICE', WHOLE_OFFICE);

}());