/* Globals _ $ */

// I dunno, my own class or something?
var joe = (function () {
  var methods = {};

  methods.log = function (key) {
    console.log("JOE: " + key + ": ", key);
  }

  return methods;
}());

var Ajax = function (opts) {
  var opts = opts || {},
      params = opts.arguments[0] || {},
      callback = opts.arguments[1] || new Function(),
      failCb = opts.arguments[2] || new Function(),
      url = '/api/v1' + (opts.url ? opts.url : ''),
      method = opts.method || 'GET',
      call = function (opts) {
        $.ajax({
          url: url,
          type: method,
          data: params
        }).done(callback).fail(failCb);
      };

  return call;
};

var Team = (function () {
  var methods = {};

  methods.version = function (d, cb, f) {
    var handler = new Ajax();
    handler.call();
  };

  methods.getOffice = function (d, cb, f) {
    var handler = new Ajax({
      arguments: arguments,
      url: '/get_office'
    });
    handler.call();
  };

  methods.formTeams = function (d, cb, f) {
    var handler = new Ajax({
      arguments: arguments,
      url: '/form_teams'
    });
    handler.call();
  };

  methods.getNames = function (d, cb, f) {
    var handler = new Ajax({
      arguments: arguments,
      url: '/generate_team_names'
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
    teams: []
  },
  methods: {
    loadAll: function () {
      this.players = [ 'Joe', 'Manny', 'Michael', 'Vengadesh', 'Pankaj', 'Sunil', 'Max', 'Roman', 'Audrey', 'Chris', 'Sohail', 'Scott', 'Stephen', 'Bobby' ];
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
      var that = this,
          teams = [];

      Team.formTeams({ players: this.players }, function (data, message, status) {
        teams = data.teams;
        Team.getNames({ num: data.teams.length }, function (data, message, status) {
          _.forEach(teams, function (team, i) {
            team.name = data.team_names[i];
          });

          that.teams = teams;
        });
      });
    },
    resetTeams: function () {
      this.teams = [];
    }
  }
});