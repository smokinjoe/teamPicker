/* Globals _ */

// I dunno, my own class or something?

var Team = (function () {
  var methods = {},
      apiUrl = '/api/v1';

  function init(opts) {
    var opts = opts || {},
        params = opts.arguments[0] || {},
        callback = opts.arguments[1] || new Function(),
        failCb = opts.arguments[2] || new Function(),
        url = opts.url || '/api/v1',
        method = opts.method || 'GET',
        call = function (opts) {
          $.ajax({
            url: url,
            type: method,
            data: params
          }).done(callback).fail(failCb);
        };

        debugger;

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
}());

// Global Vue filters
Vue.filter('upper', function (value) {
  return value.toUpperCase();
});

Vue.filter('lower', function (value) {
  return value.toLowerCase();
});

// Global Vue components/attributes

Vue.component('alert', {
  props: ['type', 'bold', 'msg'],
  template: '<div class="alert alert-{{ type }}" role="alert"><b>{{ bold }}</b> {{ msg }}</div>'
});

// Global Vue directives

Vue.directive('twitter', function (message) {
  this.el.addEventListener('click', function () {
    var width = 818,
        height = 400,
        left = (document.documentElement.clientWidth - width) / 2,
        top = (document.documentElement.clientHeigh - height) / 2,
        url = 'https://twitter.com/intent/tweet?text=' + message + '&url=http://vegibit.com',
        opts = 'status=1' +
            ',width=' + width +
            ',height=' + height +
            ',top=' + top +
            ',left=' + left;

      window.open(url, 'twitter', opts);
      return false;
  });
});

// View Models

var VM_TeamEdit = new Vue({
  el: '#AppCtrl',
  data: {
    newPlayerName: '',
    players: [],
    team: []
  },
  methods: {
    loadAll: function () {
      this.players = [ 'Joe', 'Manny', 'Michael', 'Vengadesh', 'Pankaj', 'Sunil', 'Max', 'Roman', 'Audrey', 'Sohail', 'Scott', 'Stephen', 'Bobby' ];
    },
    addNewPlayer: function () {
      this.players.push(this.newPlayerName);
      this.newPlayerName = '';
    },
    removePlayer: function (player) {
      this.players = _.filter(this.players, function (plyr) {
        return plyr !== player;
      });
    },
    formTeams: function () {
      console.log("JOE: formTeams(): ");
      Team.formTeams(this.players, function () {
        console.log("JOE: arguments: ", arguments);
      });
    }
  }
});