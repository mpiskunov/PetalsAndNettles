var express = require('express');
var router = express.Router();

/* GET index page */
router.get('/', function (req, res) {
  res.render('partials/index', { title: 'Petals & Nettles', message: 'Hello there! I am the index' });
});

/* GET about page */
router.get('/about', function (req, res) {
  res.render('partials/about', { title: 'About Us', message: 'Hello there! I am the about' });
});

/* GET shop page */
router.get('/shop', function (req, res) {
  res.render('partials/shop', { title: 'The Shop', message: 'Hello there! Get ready to shop' });
});

module.exports = router;