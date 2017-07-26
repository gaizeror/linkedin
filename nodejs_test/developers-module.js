var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://linkedin:I3IRyrMMQ6my5qoW1bH0fBZJomAmSMcW6oksw8fZaT6FgKMEmRcIujM3NgXRnL8KAamzC6gUSQ2WIyeb4LMW5Q==@linkedin.documents.azure.com:10255/?ssl=true';

exports.getAllDevelopers = function () {

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("developers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

return 'A';

}