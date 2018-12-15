var db = require("../models");

module.exports = function(app) {
	// Load index page
	app.get("/", function(req, res) {
		db.brewery_table.findAll({}).then(function(breweries) {
			res.render("index", {
				title: "Home Page!",
				msg: "Welcome!",
				hideToolbar: "true",
				breweries: breweries,
				examples: []
			});
		});
	});

	app.get("/points", function(req, res) {
		if (!req.user) {
			res.redirect("/login");
		}
		db.Example.findAll({}).then(function(dbExamples) {
			res.render("points", {
				title: "Points Page!",
				msg: "Welcome!",
				examples: dbExamples
			});
		});
	});

	app.get("/login", function(req, res) {
		res.render("login", {
			title: "Log In!",
			msg: "Welcome!",
			hideToolbar: "true"
		});
	});

	app.get("/breweries", function(req, res) {
		if (!req.user) {
			res.redirect("/login");
		}
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
	app.get("/account", function(req, res) {
		if (!req.user) {
			res.redirect("/login");
		}
		res.render("account", {
			title: "Your account!",
			msg: "Welcome!",
			hideToolbar: "false"
		});
	});
  
	app.get("/points", function(req, res) {
		if (!req.user) {
			res.redirect("/login");
		}
		res.render("points", {
			title: "Points Page!",
			msg: "Welcome!",
			hideToolbar: "false"
		});
	});

	// app.get("/logout", function(req, res) {
	// 	if (!req.user)
	// })

	// Render 404 page for any unmatched routes
	app.get("*", function(req, res) {
		res.render("404", {
			title: "Page Not Found",
			hideToolbar: "true"
		});
	});
};
