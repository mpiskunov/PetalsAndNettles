var models  = require('../models');
var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user.dataValues.id);
});

passport.deserializeUser(function(userID, done) {
  models.User.findOne({
    where: {
      email: userID
    }
  }).then(function (user) {
      done(null, user.dataValues);
  });
});

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new LocalStrategy({
  usernameField: 'email'
},
  function(username, password, done) {
    models.User.findOne({
      where: {
        email: username,
        password: password
      }
    }).then(function(user, err) {
      if(user != null) {
        done(null, user.dataValues);
      } else {
        console.log("Invalid username or password.");
        done(null, false);
      }
    });
  }
));

router.get('/', function(req, res) {
  res.send(req);
});

router.get('/login', function(req, res) {
	res.send('route to auth');
});

router.post("/login", passport.authenticate("local", { successRedirect: "/", failureRedirect: "/auth"}));

// router.post('/login', function(req, res, next) {
//   models.User.findOne({
//       where: {
//         email: req.body.email,
//         password: req.body.password
//       }
//     }).then(function(user, err) {
//       if(user != null) {
//         console.log(user.dataValues);
//       } else {
//         console.log("Invalid username or password.");

//         console.log(user);
//       }
//     });
// });

router.get("/logout", function(req, res, next) {
  req.logout();
  res.redirect('/');
});

router.post('/signup', function(req, res, next) {
	models.User.create({
	    firstName: req.body.firstName ,
	    lastName: req.body.lastName,
	    address: req.body.address,
	    city: req.body.city,
	    state: req.body.state,
	    zipCode: req.body.zipCode,
	    email: req.body.email,
	    password: req.body.password
	  }).then(function() {
	  	console.log('user created');
	    res.redirect('/');
	  });
});



module.exports = router;