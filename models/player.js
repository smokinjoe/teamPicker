var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = mongoose.model('Player', {
  name: String,
  team: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  }
});