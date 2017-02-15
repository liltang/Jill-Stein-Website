var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var voteSchema = new Schema({
  name: {type: String, required: true},
  picture: {type: String, required: true },
  pictureLarge: {type: String, required: true},
  profileLink: {type: String, required: true},
  matched: {type: Boolean, required: true, default: false}
});

var Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;
