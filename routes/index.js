var express = require('express');
var router = express.Router();
var blog = require('../blog.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rebel Streamin Solutions', notas:blog});
});

module.exports = router;
