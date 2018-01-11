var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var port    =   process.env.PORT || 8000;
var path = require('path');
var Sequelize = require('sequelize');
var routes = require('./routes/index');
var auth = require('./routes/auth');
var models = require('./models');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');


app.use(cookieParser());
app.use(session({ 
    secret: 'secret',
    resave: true, 
    saveUninitialized:true,
    cookie: { secure: true }
    }
)); // session secret

app.use(passport.initialize());
app.use(passport.session());

/* make the app use the /static directory from public*/
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',routes);
app.use('/auth',auth);
// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({           
            "error": {
                "message": err.message,
                "status" : err.status
            }                    
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({           
        "error": {
            "message": err.message,
            "status" : err.status
        }                    
    });
});

app.listen(port);
console.log('Listening to port:' + port);

module.exports  = app;

/*

Unhandled rejection Error: passport.initialize() middleware not in use
    at IncomingMessage.req.login.req.logIn (C:\Users\duffl_000\Desktop\PetalsAndNettles\node_modules\passport\lib\http\request.js:46:34)
    at Strategy.strategy.success (C:\Users\duffl_000\Desktop\PetalsAndNettles\node_modules\passport\lib\middleware\authenticate.js:248:13)
    at verified (C:\Users\duffl_000\Desktop\PetalsAndNettles\node_modules\passport-local\lib\strategy.js:83:10)
    at C:\Users\duffl_000\Desktop\PetalsAndNettles\routes\auth.js:41:9
    at tryCatcher (C:\Users\duffl_000\Desktop\PetalsAndNettles\node_modules\bluebird\js\release\util.js:16:23)
    at Promise._settlePromiseFromHandler (C:\Users\duffl_000\Desktop\PetalsAndNettles\node_modules\bluebird\js\release\promise.js:512:31)
    at Promise._settlePromise (C:\Users\duffl_000\Desktop\PetalsAndNettles\node_modules\bluebird\js\release\promise.js:569:18)
    at Promise._settlePromise0 (C:\Users\duffl_000\Desktop\PetalsAndNettles\node_modules\bluebird\js\release\promise.js:614:10)
    at Promise._settlePromises (C:\Users\duffl_000\Desktop\PetalsAndNettles\node_modules\bluebird\js\release\promise.js:693:18)
    at Async._drainQueue (C:\Users\duffl_000\Desktop\PetalsAndNettles\node_modules\bluebird\js\release\async.js:133:16)
    at Async._drainQueues (C:\Users\duffl_000\Desktop\PetalsAndNettles\node_modules\bluebird\js\release\async.js:143:10)
    at Immediate.Async.drainQueues [as _onImmediate] (C:\Users\duffl_000\Desktop\PetalsAndNettles\node_modules\bluebird\js\release\async.js:17:14)
    at processImmediate [as _immediateCallback] (timers.js:383:17)

Unhandled rejection Error: passport.initialize() middleware not in use
    at IncomingMessage.req.login.req.logIn (C:\Users\duffl_000\Desktop\PetalsAndNettles\node_modules\passport\lib\http\request.js:46:34)
    at Strategy.strategy.success (C:\Users\duffl_000\Desktop\PetalsAndNettles\node_modules\passport\lib\middleware\authenticate.js:248:13)
    at verified (C:\Users\duffl_000\Desktop\PetalsAndNettles\node_modules\passport-local\lib\strategy.js:83:10)
    at C:\Users\duffl_000\Desktop\PetalsAndNettles\routes\auth.js:41:9
    at tryCatcher (C:\Users\duffl_000\Desktop\PetalsAndNettles\node_modules\bluebird\js\release\util.js:16:23)
    at Promise._settlePromiseFromHandler (C:\Users\duffl_000\Desktop\PetalsAndNettles\node_modules\bluebird\js\release\promise.js:512:31)
    at Promise._settlePromise (C:\Users\duffl_000\Desktop\PetalsAndNettles\node_modules\bluebird\js\release\promise.js:569:18)
    at Promise._settlePromise0 (C:\Users\duffl_000\Desktop\PetalsAndNettles\node_modules\bluebird\js\release\promise.js:614:10)
    at Promise._settlePromises (C:\Users\duffl_000\Desktop\PetalsAndNettles\node_modules\bluebird\js\release\promise.js:693:18)
    at Async._drainQueue (C:\Users\duffl_000\Desktop\PetalsAndNettles\node_modules\bluebird\js\release\async.js:133:16)
    at Async._drainQueues (C:\Users\duffl_000\Desktop\PetalsAndNettles\node_modules\bluebird\js\release\async.js:143:10)
    at Immediate.Async.drainQueues [as _onImmediate] (C:\Users\duffl_000\Desktop\PetalsAndNettles\node_modules\bluebird\js\release\async.js:17:14)
    at processImmediate [as _immediateCallback] (timers.js:383:17)

*/