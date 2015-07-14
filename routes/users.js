var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  movies = {name: "batman"};
  res.json(movies);
});

module.exports = router;
