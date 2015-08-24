var CONSTANTS = require('./../services/constants');
var joe = require('./../services/joe');

// utility methods
function shuffle(o){
  for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function randChunkSplit (arr, min, max) {
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
}

var generateTeamName = function (cb) {
  var adjIndex = randomArrayIndex(CONSTANTS.ADJECTIVES),
      verbIndex = randomArrayIndex(CONSTANTS.VERBS),
      nounIndex = randomArrayIndex(CONSTANTS.NOUNS),
      result = '';

  if ( randomArrayIndex(new Array(2)) == 1 ) {
    result = 'The ' + verb + ' ' + noun + ':';
  }
  else {
    result = 'The ' + adjective + ' ' + noun + ':';
  }

  if (cb) cb(result);
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
  generateTeamName: function (req, res) {
    generateTeamName(function (teamName) {
      res.json({
        team_name: teamName
      });
    });
  }
};

module.exports = methods;