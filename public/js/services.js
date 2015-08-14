(function () {
  "use strict";

  angular.module('App.services', []);

  // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/

  angular.module('App.services')
  .service('Team', ['$http', function ($http) {
    var methods = {},
        apiUrl = '/api/v1';

    function init(opts) {
      var opts = opts || {},
          params = opts.arguments[0] || {},
          callback = opts.arguments[1] || new Function(),
          fail = opts.arguments[2] || new Function(),
          url = opts.url || '/api/v1',
          method = opts.method || 'GET',
          call = function (opts) {
            $http({
              url: url,
              method: method,
              params: params
            }).success(callback).error(fail);
          };

      return call;
    }

    methods.version = function (d, cb, f) {
      var handler = init();
      handler.call();
    };

    methods.getOffice = function (d, cb, f) {
      var handler = init({
        arguments: arguments,
        url: apiUrl + '/get_office'
      });
      handler.call();
    };

    methods.formTeams = function (d, cb, f) {
      var handler = init({
        arguments: arguments,
        url: apiUrl + '/form_teams'
      });
      handler.call();
    };

    return methods;
  }]);

}());