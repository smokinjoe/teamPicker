/* Globals _ $ Vue */
Vue.config.debug = true;

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

// Global Vue components

Vue.component('errors', {
  props: ['type', 'title', 'html'],
  template: '<div class="alert alert-{{ type }}" role="alert""><strong>{{ title }}</strong> {{ html }}</div>'
});

// View Models

var VM_TeamEdit = new Vue({
  el: '#AppCtrl',
  data: {
    newPlayerName: '',
    players: [],
    teams: [],
    errors: {
      show: false,
      msgs: [],
      alert: {
        style: 'display:none;',
        title: 'There were errors:',
        html: ''
      }
    }
  },
  methods: {
    _preHook: function (e) {
      if (e) e.preventDefault();
      this.clearErrors();
    },
    loadAll: function (e) {
      this._preHook(e);
      this.players = [ 'Joe', 'Manny', 'Michael', 'Vengadesh', 'Pankaj', 'Sunil', 'Max', 'Roman', 'Audrey', 'Chris', 'Sohail', 'Scott', 'Stephen', 'Bobby' ];
    },
    addNewPlayer: function (e) {
      this._preHook(e);
      if (this.newPlayerName.length === 0) {
        this.addError('Mr. Blank stinks, choose someone better.');
      }
      else {
        this.players.push(this.newPlayerName);
        this.newPlayerName = '';
      }
    },
    removePlayer: function (player) {
      this.players = _.filter(this.players, function (plyr) {
        return plyr !== player;
      });
    },
    formTeams: function () {
      var that = this,
          teamsOfPlayers = [];

      Team.formTeams({ players: this.players }, function (data, message, status) {
        teamsOfPlayers = data.teams;
        Team.getNames({ num: data.teams.length }, function (data, message, status) {
          var teams = [];
          _.forEach(teamsOfPlayers, function (team, i) {
            teams.push({
              name: data.team_names[i],
              players: team
            });
          });

          that.teams = teams;
        });
      });
    },
    resetTeams: function () {
      this.teams = [];
    },
    addError: function (error) {
      this.errors.msgs.push(error);
      this.errors.show = true;
      this.refreshErrors();
    },
    refreshErrors: function () {
      if (this.errors.show) {
        this.errors.alert.style = 'display:block';
      }
      else {
        this.errors.alert.style = 'display:none';
      }
      this.generateErrorHtml();
    },
    generateErrorHtml: function () {
      var html = '';
      _.forEach(this.errors.msgs, function (msg) {
        html += msg;
      });
      this.errors.alert.html = html;
    },
    clearErrors: function () {
      this.errors.msgs = [];
      this.errors.show = false;
      this.refreshErrors();
    }
  }
});