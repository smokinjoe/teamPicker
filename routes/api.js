var CONSTANTS = require('./../services/constants');
var joe = require('./../services/joe');

// utility methods
var shuffle = function (o) {
  for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

var getRandomArbitrary = function (min, max) {
  return Math.random() * (max - min) + min;
};

var randChunkSplit = function (arr, min, max) {
  var arr = arr.slice();
  var arrs = [];
  var size = 1;
  var min = min || 1;
  var max = max || min || 1;

  while (arr.length > 0) {
    var index = getRandomArbitrary(0, arr.length - 1);
    size = Math.min(max, Math.floor((Math.random() * max) + min));
    arrs.push(arr.splice(index, size));
  }

  return arrs;
};

var randomArrayIndex = function (arr) {
  return arr[Math.floor(( Math.random() * arr.length ))];
};

var generateTeamNames = function (num, cb) {
  num = num || 1;
  var adjective = '',
      verb = '',
      noun = '',
      result = [];

  for (var i = 0; i < num; i++) {
    adjective = randomArrayIndex(CONSTANTS.ADJECTIVES);
    verb = randomArrayIndex(CONSTANTS.VERBS);
    noun = randomArrayIndex(CONSTANTS.NOUNS);

    if ( randomArrayIndex(new Array(2)) == 1 ) {
      result.push('The ' + verb + ' ' + noun + ':');
    }
    else {
      result.push('The ' + adjective + ' ' + noun + ':');
    }
  }

  if (cb) cb(result);
};

var randomArrayIndex = function (arr) {
  return arr[Math.floor(( Math.random() * arr.length ))];
};

var methods = {
  index: function (req, res) {
    res.json({
      version: '0.1'
    });
  },
  getOffice: function (req, res) {
    res.json({
      players: CONSTANTS.WHOLE_OFFICE
    });
  },
  formTeams: function (req, res) {
    var players = req.query.players || [],
        numPlayers = players.length,
        groupCount = Math.ceil(players.length / 2),
        playerList = shuffle(players),
        teams = randChunkSplit(playerList, 2);

    res.json({
      teams: teams
    });
  },
  generateTeamNames: function (req, res) {
    var num = req.query.num;

    generateTeamNames(num, function (teamNames) {
      res.json({
        team_names: teamNames
      });
    });
  }
};

module.exports = methods;