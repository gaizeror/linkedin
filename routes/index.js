var express = require('express');
var router = express.Router();
var developerCtrl = require('../controllers/developer.server.controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/newdev', function (req, res) {
    return res.render('newdev', { title: 'Developer - New dev'});
});

router.post('/newdev', function (req, res) {
    return developerCtrl.create(req, res);
});

router.get('/list', function (req, res) {
  developerCtrl.read(function(results) {
  return res.send(results)
  });
});

router.get('/delete', function (req, res) {
    return res.render('deleteById', { title: 'Developer - Delete dev'});
});

router.post('/delete', function (req, res) {
    developerCtrl.delete(req,res);
    res.render('index', { title: 'Express' });
});

router.get('/update', function (req, res) {
    return res.render('editDevById', { title: 'Developer - Update dev'});
});

router.post('/update', function (req, res) {
    developerCtrl.update(req,res);
    res.render('index', { title: 'Express' });
});


module.exports = router;
