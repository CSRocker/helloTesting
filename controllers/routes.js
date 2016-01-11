/**
 * Created by ClaraChen on 1/10/16.
 */
// routes.js
// Handle any Get methods calls and rendering pages


//Calls for Libraries to be used
var _ = require('underscore');
//Require JavaScript Helper Library Here

/* Routes Rendering Views
================================== */

var indexfn = function(req, res){
    console.log("Rendering to Index.html");
  res.render("index",{layout:false});
};



/* Map Routes
 =============================  */
var define_routes = function(dict) {
    var toroute = function(item) {
        return _.object(_.zip(['path', 'fn'], [item[0], item[1]]));
    };
    console.log("We are in routes...");
    return _.map(_.pairs(dict), toroute);
};


/* Define Routes
================================ */
var routes = define_routes({
    '/': indexfn
});



module.exports = routes;