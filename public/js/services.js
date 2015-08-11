(function () {
  "use strict";

  angular.module('App.services', []);

  angular.module('App.services')
  .service('Team', ['$http', function ($http) {
    var methods = {},
        apiUrl = '/api/v1';

    function init(data, callback, fail) {
      var args = {};
      args.data = data || {};
      args.callback = callback || new Function();
      args.fail = callback || new Function();
      return args;
    }

    methods.version = function (d, cb, f) {
      var args = init(d, cb, f);

      $http({
        url: apiUrl,
        method: 'GET',
        params: args.data
      }).success(args.callback).error(args.fail);
    };

    methods.getOffice = function (d, cb, f) {
      var args = init(d, cb, f);

      $http({
        url: apiUrl + '/get_office',
        method: 'GET',
        params: args.data
      }).success(args.callback).error(args.fail);
    };

    return methods;
  }]);

}());