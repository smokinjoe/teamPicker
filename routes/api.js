var CONSTANTS = require('./../services/constants');

exports.index = function (req, res) {
  res.json({
    version: '0.1'
  });
};

exports.getOffice = function (req, res) {
  res.json({
    players: CONSTANTS.WHOLE_OFFICE
  });
}