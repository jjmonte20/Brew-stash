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
		// tested to see what req.user is
		// console.log(req.user);
		res.render("points", {
			title: "Points Page!",
			msg: "Welcome!",
			// examples: dbExamples
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
	
	// get a dynamic route that shows the userId
	router.get("/admin/me", isAuthenticated, function(req,res) {
		// want to determine the id here where the id is whatever the userid is
		db.Brewery.findAll({
			where: {
				UserId: req.user.id
			},
			include: [db.User]
		}
	).then(function(dbBrewery) {
			var hbsObject = { brewery: dbBrewery };
			console.log(hbsObject);
			res.render("adminbreweries", hbsObject);
		});
	});

	// router.get("/admin/:id", isAuthenticated, function(req,res) {
	// 	// var id = req.params.id;
	// 	req.params.id = req.user.id;
	// 	console.log("params = " + req.params.id);
	// 	// want to determine the id here where the id is whatever the userid is
	// 	db.User.findAll({
	// 		where: {
	// 			id: req.user.id
	// 		}
	// 	}//,
	// 	// db.User.findAll({
	// 	// 	where: {
	// 	// 		id: req.user.id
	// 	// 	}
	// 	// })
	// ).then(function(dbUser) {
	// 		var hbsObject = { user: dbUser };
	// 		// var hbsObject2 = { user: dbUser};
	// 		// console.log(dbUser);
	// 		// console.log(hbsObject2);
	// 		console.log(hbsObject);
	// 		res.send(hbsObject);
	// 	});
	// });

	// working example without a dynamic url
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

	router.get("/drinks", isAuthenticated, function(req, res) {
		db.Drinks.findAll()
		.then(function(dbDrinks){
			console.log(dbDrinks);
			var hbsObject = { drinks: dbDrinks }
			// console.log(hbsObject);
			res.render("addDrinks", hbsObject
	
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
