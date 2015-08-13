var logger = require('morgan'),
    CONSTANTS = require('./../services/constants');

exports.index = function (req, res) {
  res.json({
    version: '0.1'
  });
};

exports.getOffice = function (req, res) {
  res.json({
    players: CONSTANTS.WHOLE_OFFICE
  });
};

exports.formTeams = function (req, res) {
//   var players = JSON.parse(req.params.players);

  var players = JSON.parse(req.params.players) || [];
  res.json({
    players: players
  });
};