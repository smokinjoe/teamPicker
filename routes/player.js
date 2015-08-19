var Player = require('../models/player'),
    Team = require('../models/team');

var methods = {
  index: function (req, res, next) {
    res.json({
      players: Player.getAll()
    });
  },
  get: function (req, res, next) {
    var id = req.param('id'),
        player;

    Player.findOne({ id: id }, function (err, player) {
      if (err) {
        console.log('Error: ', err);
        throw err
      }
      if (player) {
        console.log('Found player: ', username);
        res.json({
          player: player
        });
      }
      else {
        res.status(404);
      }
    });
  },
  create: function (req, res, next) {
    var newPlayer = new Player();
    newPlayer.name = req.param('name');

    newPlayer.save(function (err) {
      if (err) {
        console.log('Error in saving player: ', err);
        throw err;
      }
      console.log('Player created successfully');
      res.json({
        player: newPlayer
      });
    });
  }
};

module.exports = methods;