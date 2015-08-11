(function () {
  "use strict";

  angular.module('App.services', []);

  angular.module('App.services')
  .service('Team', ['$http', function ($http) {
    var methods = {},
        apiUrl = '/api/v1';

    methods.version = function (data, callback, fail) {
      var params = {};
      params.data = data;

      callback = callback || new Function();
      fail = fail || new Function();

      $http({
        url: apiUrl,
        method: 'GET',
        params: params
      }).success(callback).error(fail);
    };

    return methods;
  }]);

}());