//Dependencies
// =============================================================
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Sets up Express
// =============================================================
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

//Set up Express app to handle data parsing
// =============================================================
//***************TALK TO JACK ABOUT LINES 20-22**************
// =============================================================
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use('/static', express.static(path.join(__dirname, 'app/public')))

//Routes
// =============================================================
// =============================================================
app.get('./app/routing/apiRoutes.js')(app);
app.get('./app/routing/htmlRoutes.js')(app);


//Starts server to begin listening
// =============================================================
// =============================================================
app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});