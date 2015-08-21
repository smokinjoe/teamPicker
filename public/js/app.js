/* Globals _ */

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
    }
  }
});