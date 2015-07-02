var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Player', {
  name: String,
  team: { type: Schema.Types.ObjectId, ref: 'Team' }
});