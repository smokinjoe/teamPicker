var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Team', {
  name: String,
  players: [{ type: Schema.Types.ObjectId, ref: 'Player' }]
});