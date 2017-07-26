var Developer = require('../models/developer.server.model.js');

exports.create = function (req, res) {
    var entry = new Developer({
        _id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        mail: req.body.mail,
        projects: req.body.projects,
        skills: req.body.skills.split(','),
        description: req.body.description
    });

    entry.save();

    // redirect to home page
    res.redirect(301, '/');
}

exports.read = function (callback) {
    Developer.find({}, function (err, results) {
        callback(results);
    });
}

exports.delete = function (req, res) {
    Developer.find({
        _id: req.body.id
    }).remove().exec();
}

exports.update = function (req, res) {
    console.log(req.body.id);
    console.log(req.body.firstname);
    var query = {
        '_id': req.body.id
    };
    var updated = req.body.updatedDeveloper;
    
    Developer.findOneAndUpdate(query, updated, {
        upsert: true
    }, function (err, doc) {
        if (err) return res.send(500, {
            error: err
        });
//        return res.send("succesfully saved");
    });
}
