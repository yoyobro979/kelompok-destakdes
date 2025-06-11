var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');

// Router imports
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var logresRouter = require('./routes/logres').router;
var masterRouter = require('./routes/master');
var hewanRouter = require('./routes/hewan');
var buahRouter = require('./routes/buah');
var kendaraanRouter = require('./routes/kendaraan'); // Fixed path

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());

// Session configuration
app.use(session({
  secret: 'paainur',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false, // Set to true if using HTTPS
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Make session available in views
app.use((req, res, next) => {
  res.locals.session = req.session;
  res.locals.flash = req.flash();
  next();
});

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', logresRouter);
app.use('/master', masterRouter);
app.use('/hewan', hewanRouter); // Added hewan route
app.use('/buah', buahRouter); // Added buah route
app.use('/kendaraan', kendaraanRouter); // Fixed route

// 404 Handler
app.use(function(req, res, next) {
  res.status(404).render('404', {
    title: 'Halaman Tidak Ditemukan',
    layout: 'layout' // Jika menggunakan layout
  });
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render error page
  res.status(err.status || 500);
  
  // Custom error pages based on status code
  if (err.status === 404) {
    return res.render('404', { 
      title: 'Halaman Tidak Ditemukan' 
    });
  }
  
  res.render('error', {
    title: 'Terjadi Kesalahan'
  });
});

module.exports = app;