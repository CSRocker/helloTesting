//app.js
//Basic setup for NodeJS server

/*
//Calls for the packages needed
var express = require('express')              // Node Framework
    , app = express()                         // Define app variable
    , port = process.env.PORT || 3032         // Define port the app will be using
    , http = require('http')                  // Require http server
    , path = require('path')                  // Handling of file paths
    , favicon = require('serve-favicon')      //
    , logger = require('morgan')              //
    , cookieParser = require('cookie-parser') //
    , bodyParser = require('body-parser')     // Parse body of REST Requests
    , routes = require('./controllers/routes')// Define routes paths
    , serveStatic = require('serve-static'); // Serve Static Files
//var users = require('./routes/users');


// view engine setup to ejs
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');


/!* Middlewares
=========================
 *!/
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // configure "app" to use bodyParser() to handle date from POST
//app.use(express.static(path.join(__dirname, 'public')));
app.use('/public',serveStatic(__dirname + '/public/')); //Serve Static Files
app.use(cookieParser());

//app.use('/', routes);
//app.use('/users', users);

// catch 404 and forward to error handler

 app.use(function(req, res, next) {
 var err = new Error('Not Found');
 err.status = 404;
 next(err);
 });




/!* ROUTES
====================== *!/
for (var route in routes) {
    app.get(routes[route].path, routes[route].fn);
}

/!* POSTS
 ======================= *!/
//require('.controllers/posts')(app); //add parameters and database later


/!*Start Server *!/

//Begin listening for HTTP requests to Express app
http.createServer(app).listen(port,function(){
    console.log("Listening on port:" + port);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



*/

//Calls for the packages needed
var express = require('express')          // Node Framework
    , bodyParser = require('body-parser') // Parse body of REST Requests
    , app = express()                     // Define app variable
    , port = process.env.PORT || 3000     // Define port the app will be using
    , http = require('http')              // Require http server
    , path = require('path')              // Handling of file path
    , routes = require('./controllers/routes') // Define routes path
    , async = require('async')            // Perform Asynchronous functions
    , serveStatic = require('serve-static'); // Serve Static Files


//set the view engine to ejs
app.engine('.html',require('ejs').__express);
app.set('view engine','html');

/* Middlewares
============================= */
app.use(bodyParser.urlencoded({extended: true})); // configure "app" to use bodyParser() to handle date from POST
app.use(bodyParser.json());                       // define parse format - JSON
app.use('/public',serveStatic(__dirname +'/public/')); // Serve Static Files
app.use(require('cookie-parser')());              // Enable Cookies on App



/* ROUTES
============================== */
for(var route in routes){
  app.get(routes[route].path, routes[route].fn);

}

/* POSTS
================================= */
//require('./controllers/posts')(app);

/* Start Server
================================= */
// Begin Listening For HTTP requests to Express app
async.parallel([
    function(){
      //Begin listening for HTTP requests to Express app
      http.createServer(app).listen(port, function(){
        console.log("Listening on " + port);
      });
    }
]);


module.exports = app;
