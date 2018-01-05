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
/* make the app use the /static directory from public*/
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',routes);
app.use('/auth',auth);
// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

// sequelize.sync().then(function() {
//   console.log("ready to go!")
// });
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