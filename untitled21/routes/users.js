var express = require('express');
var router = express.Router();
var Recycling = require('./models/Recycling');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
