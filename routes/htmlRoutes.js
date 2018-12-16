var db = require("../models");
// using the middleware to route the user around
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
	// Load index page
	app.get("/", function(req, res) {
		res.render("index", {
			title: "Home Page!",
			msg: "Welcome!",
			hideToolbar: "true",
			examples: []
		});
	});

	app.get("/points", isAuthenticated, function(req, res) {
		res.render("points", {
			title: "Points Page!",
			msg: "Welcome!",
			examples: dbExamples
		});
	});

	app.get("/login", function(req, res) {
		res.render("login", {
			title: "Log In!",
			msg: "Welcome!",
			hideToolbar: "true"
		});
	});

	app.get("/breweries", isAuthenticated, function(req, res) {
		res.render("breweries", {
			title: "Breweries Page!",
			msg: "Welcome!",
			hideToolbar: "false",
			examples: []
		});
	});


	app.get("/createaccount", function(req, res) {
		res.render("createaccount", {
			title: "Create an Account!",
			msg: "Welcome!",
			hideToolbar: "true",
		});
	});
	app.get("/account", isAuthenticated, function(req, res) {
		res.render("account", {
			title: "Your account!",
			msg: "Welcome!",
			hideToolbar: "false"
		});
	});

	app.get("/admin", function(req, res) {
		res.render("adminpage", {
			title: "Create an Account!",
			msg: "Welcome!",
			hideToolbar: "true",
		});
	});
  
	app.get("/edit", function(req, res) {
		res.render("editDrinks", {
			title: "Create an Account!",
			msg: "Welcome!",
			hideToolbar: "true",
		});
	});

	app.get("/addBreweries", function(req, res) {
		res.render("adminbreweries", {
			title: "Create an Account!",
			msg: "Welcome!",
			hideToolbar: "true",
		});
	});
	// Render 404 page for any unmatched routes
	app.get("*", function(req, res) {
		res.render("404", {
			title: "Page Not Found",
			hideToolbar: "true"
		});
	});

};
