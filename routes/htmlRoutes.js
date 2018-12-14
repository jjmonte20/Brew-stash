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

	// testing a login page
	app.get("/login", function(req, res) {
		// If the user already has an account send them to the members page
		// if (req.user) {
		// 	res.redirect("/members");
		// }
		res.render("login", {
			title: "Log In!",
			msg: "Welcome!",
			hideToolbar: "true"
		});
	});

	app.get("/breweries", function(req, res) {
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
		res.render("account", {
			title: "Your account!",
			msg: "Welcome!",
			hideToolbar: "false"
		});
	});
  
	app.get("/points", function(req, res) {
		res.render("points", {
			title: "Points Page!",
			msg: "Welcome!",
			hideToolbar: "false"
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
