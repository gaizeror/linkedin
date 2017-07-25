var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://linkedin:I3IRyrMMQ6my5qoW1bH0fBZJomAmSMcW6oksw8fZaT6FgKMEmRcIujM3NgXRnL8KAamzC6gUSQ2WIyeb4LMW5Q==@linkedin.documents.azure.com:10255/?ssl=true';

var insertDocument = function(db, callback) {
db.collection('developers').insertOne( {
        "id": "205680614",
        "firstName": "Or",
        "lastName": "gaizer",
        "team": "sharepoint",
        "technolegies": ["mongodb","node.js"],
        "projects": ["linkedin"],
        "address": { "country": "USA", "state": "WA", "city": "Seattle" }
    }, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the families collection.");
    callback();
});
};

var findFamilies = function(db, callback) {
var cursor =db.collection('developers').find( );
cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
        console.dir(doc);
    } else {
        callback();
    }
});
};

var updateFamilies = function(db, callback) {
db.collection('developers').updateOne(
    { "lastName" : "Andersen" },
    {
        $set: { "pets": [
            { "givenName": "Fluffy" },
            { "givenName": "Rocky"}
        ] },
        $currentDate: { "lastModified": true }
    }, function(err, results) {
    console.log(results);
    callback();
});
};

var removeFamilies = function(db, callback) {
db.collection('developers').deleteMany(
    { "lastName": "Andersesdsdsdn" },
    function(err, results) {
        console.log(results);
        callback();
    }
);
};

MongoClient.connect(url, function(err, db) {
assert.equal(null, err);
insertDocument(db, function() {
    findFamilies(db, function() {
    updateFamilies(db, function() {
        removeFamilies(db, function() {
            db.close();
        });
    });
    });
});
});