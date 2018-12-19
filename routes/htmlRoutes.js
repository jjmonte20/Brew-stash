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
			examples: []
		});
	});

	router.get("/createaccount", function(req, res) {
		res.render("createaccount", {
			title: "Create an Account!",
			msg: "Welcome!",
		});
	});

	router.get("/login", function(req, res) {
		res.render("login", {
			title: "Log In!",
			msg: "Welcome!",
		});
	});

	router.get("/breweries", function(req, res) {
		db.Brewery.findAll({
		}).then(function(viewDrinks){
			var hbsObject = { brewery: viewDrinks };
			res.render("breweries", hbsObject);
		});
	});
	
	// router.get("/account", function(req, res) {
	// 	res.render("account", {
	// 		title: "Breweries Page!",
	// 		msg: "Welcome!",
	// 	});
	// });


	// router.get("/adminbreweries", isAuthenticated, function(req, res) {
	// 	res.render("adminbreweries", {
	// 		title: "Breweries Page!",
	// 		msg: "Welcome!",
	// 		examples: []
	// 	});
	// });

	router.get("/adddrinks", isAuthenticated, function(req, res) {
		res.render("adddrinks", {
			title: "Drinks Page!",
			msg: "Welcome!",
			examples: []
		});
	});



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

	router.get("/drinks/:id", isAuthenticated, function(req, res) {
		db.Drinks.findAll({
			where: {
				BreweryId: req.params.id
			},
			include: [db.Brewery]
		}).then(function(dbDrinks) {
			var hbsObject = { drinks: dbDrinks };
			console.log(hbsObject)
			res.render("addDrinks", hbsObject);
		});
	});

	router.get("/viewdrinks/:id", function(req,res) {
		db.Drinks.findAll({
			where: {
				BreweryId: req.params.id
			},
			include: [db.Brewery]
		}).then(function(dbVdrinks) {
			var hbsObject = { drinks: dbVdrinks };
			res.render("datastore", hbsObject);
		})
	})
	
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

module.exports = router;
