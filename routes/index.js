var express = require('express');
var router = express.Router();

/* GET index page */
router.get('/', function (req, res) {
  res.render('partials/index', { title: 'index', message: 'Hello there! I am the index' });
});

/* GET about page */
router.get('/about', function (req, res) {
  res.render('partials/about', { title: 'about', message: 'Hello there! I am the about' });
});

module.exports = router;