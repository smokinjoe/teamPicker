(function () {
  "use strict";

  angular.module('App.services', []);

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
      var resource = init();
      resource.call();
    };

    methods.getOffice = function (d, cb, f) {
      var resource = init({
        arguments: arguments,
        url: apiUrl + '/get_office'
      });
      resource.call();
    };
    
    methods.formTeams = function (d, cb, f) {
      var resource = init({
        arguments: arguments,
        url: apiUrl + '/form_teams'
      });
      resource.call();
    };

    return methods;
  }]);

}());