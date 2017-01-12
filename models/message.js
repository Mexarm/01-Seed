var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

var schema =  new Schema({
	content: {type: String, required: true},
	user: {type: Schema.Types.Objectid, ref: 'User'}
});

module.export = mongoose.model('Message', schema);