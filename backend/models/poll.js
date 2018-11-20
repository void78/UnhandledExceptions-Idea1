
let mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
// let connection = mongoose.connect('mongodb://localhost/votingapp', {useNewUrlParser: true});
var QuestionSchema = require('./question').schema;

autoIncrement.initialize(mongoose.connection);

var PollSchema = new mongoose.Schema({
    pollid: {type: Number, required: true},
    userid: {type: Number, required: true },
    questions: [QuestionSchema]
});



PollSchema.plugin(autoIncrement.plugin, { model: 'Poll', field: 'pollid' });

module.exports = mongoose.model('Poll', PollSchema);
