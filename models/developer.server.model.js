var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var developerSchema = new Schema({
        _id: {type: Number},
        firstname: String,
        lastname: String,
        phone: String,
        mail: String,
        projects: String,
        skills: [String],
        description: String
});

module.exports = mongoose.model('Developer', developerSchema);

