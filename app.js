var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql');
var hbs = require('express-handlebars');
const session = require('express-session'); // for persistent log in



// Routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var databaseRouter = require('./routes/database');
var signupRouter = require('./routes/signup');
var loginRouter = require('./routes/login');
var accountRouter = require('./routes/account');
var gamesRouter = require('./routes/games');
var cartRouter = require('./routes/cart');
var productDetailsRouter = require('./routes/productDetails');
var logoutRouter = require('./routes/logout');

var app = express();

// create connection to database
const db = mysql.createConnection({
    host: 'durvbryvdw2sjcm5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'qubslhzqwsqcwq75',
    password: 'f20mjg5lb9fr87hu',
    database: 'xkpeg79whooruuwn',
});
// connect to database and make it global so we can access it anywhere
db.connect((err) => {
    if (err) {
        console.log('error has occurred');
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;


// enable session
app.use(session({
    secret: '6wOBwJBStY',
}))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.engine('hbs', hbs({extname : 'hbs', defaultLayout: 'layout', layoutsDir: __dirname+'/views/', helpers: {
        sliceDescription: function(description) {
            if (description.length > 100) {
                return description.slice(0, 100) + "...";
            }
            return description;
        },
        outOfStock: function(qty) {
            console.log(qty);
            console.log(typeof(qty))
        }
    }}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/database', databaseRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/account', accountRouter);
app.use('/games', gamesRouter);
app.use('/cart', cartRouter);
app.use('/productDetails', productDetailsRouter);
app.use('/logout', logoutRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
