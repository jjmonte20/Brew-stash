require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var session = require("express-session");

var db = require("./models");
// requiring this configuration of passport
var passport = require("./config/passport");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Session and passport intializing
app.use(session({ secret: " bongo Cat ", resave: true, saveUninitialize: true}));
app.use(passport.initialize());
app.use(passport.session());

// Handlebars
app.engine(
	"handlebars",
	exphbs({
		extname: "handlebars",
		defaultLayout: "main"
	})
);
app.set("view engine", "handlebars");

// Routes
var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes");
var breweryApi = require("./routes/brewery-api-routes");
var userApi = require("./routes/useroutes");
var drinksApi = require("./routes/drinkRoutes");

// using the routes
app.use(apiRoutes);
app.use(htmlRoutes);
app.use(breweryApi);
app.use(userApi);
app.use(drinksApi);

var syncOptions = { force: true };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
	syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
// turn sync options back on afterwards
db.sequelize.sync().then(function() {
 	app.listen(PORT, function() {
		console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT,	PORT);
	});
});

module.exports = app;
