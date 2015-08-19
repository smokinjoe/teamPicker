var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = mongoose.model('Player', {
  name: String
});