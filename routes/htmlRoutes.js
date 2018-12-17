var db = require("../models");
// using the middleware to route the user around
var isAuthenticated = require("../config/middleware/isAuthenticated");

// also need express
var express = require("express");

// need to route
var router = express.Router();


	// Load index page
	router.get("/", function(req, res) {
		res.render("home", {
			title: "Home Page!",
			msg: "Welcome!",
			hideToolbar: "true",
			examples: []
		});
	});

	router.get("/points", isAuthenticated, function(req, res) {
		res.render("points", {
			title: "Points Page!",
			msg: "Welcome!",
			examples: dbExamples
		});
	});

	router.get("/login", function(req, res) {
		res.render("login", {
			title: "Log In!",
			msg: "Welcome!",
			hideToolbar: "true"
		});
	});

	router.get("/breweries", isAuthenticated, function(req, res) {
		res.render("breweries", {
			title: "Breweries Page!",
			msg: "Welcome!",
			hideToolbar: "false",
			examples: []
		});
	});


	router.get("/createaccount", function(req, res) {
		res.render("createaccount", {
			title: "Create an Account!",
			msg: "Welcome!",
			hideToolbar: "true",
		});
	});
	router.get("/account", isAuthenticated, function(req, res) {
		res.render("account", {
			title: "Your account!",
			msg: "Welcome!",
			hideToolbar: "false"
		});
	});
	
	router.get("/admin", isAuthenticated, function(req, res) {
		db.Brewery.findAll()
		.then(function(dbBrewery){
			console.log(dbBrewery);
			var hbsObject = { brewery: dbBrewery }
			// console.log(hbsObject);
			res.render("adminbreweries", hbsObject
	
			// 	{ title: "Admin Page",
			// 	msg: "Welcome!",
			// 	hideToolbar: "true"
			// }
			);
		});
	});
	// Render 404 page for any unmatched routes
	// app.get("*", function(req, res) {
	// 	res.render("404", {
	// 		title: "Page Not Found",
	// 		hideToolbar: "true"
	// 	});
	// });

module.exports = router;
