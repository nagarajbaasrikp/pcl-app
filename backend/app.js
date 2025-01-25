var express = require('express');
var path = require('path');
const session = require('express-session');
let mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

var usersRouter = require('./routes/users');

var app = express();

app.use(session({
    secret: 'session_secret_key',
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: false,
    }
  }));

let mongoConnUrl = 'mongodb://localhost:27017/pcl-app';

mongoose.connect(mongoConnUrl, { useNewUrlParser: true });


let db = mongoose.connection;

db.on('error', function (err) {
  console.log('Error came in connecting' + err);
});

db.on('open', function () {
  console.log('We are connected to the database');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());

app.use(cors({
  origin: '*'
}));

app.use('/users', usersRouter);

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
  module.exports = app;