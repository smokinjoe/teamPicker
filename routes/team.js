var Player = require('../models/player'),
    Team = require('../models/team');

var methods = {
  index: function (req, res, next) {
    res.send('respond with resource');
  },
  get: function (req, res, next) {
    res.send('respond with resource');
  },
  create: function (req, res, next) {
    res.send('respond with resource');
  }
};

module.exports = methods;