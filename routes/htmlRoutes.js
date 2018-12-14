var db = require("../models");

module.exports = function(app) {
<<<<<<< Updated upstream
=======
	// Load index page
	app.get("/", function(req, res) {
		db.Example.findAll({}).then(function(dbExamples) {
			res.render("home", {
				title: "Home Page!",
				msg: "Welcome!",
				examples: dbExamples
			});
		});
	});

	app.get("/points", function(req, res) {
		db.Example.findAll({}).then(function(dbExamples) {
			res.render("points", {
				title: "Points Page!",
				msg: "Welcome!",
				examples: dbExamples
			});
		});
	});

	app.get("/breweries", function(req, res) {
		db.Example.findAll({}).then(function(dbExamples) {
			res.render("breweries", {
				title: "Breweries Page!",
				msg: "Welcome!",
				examples: dbExamples
			});
		});
	});

	app.get("/login", function(req, res) {
		db.Example.findAll({}).then(function(dbExamples) {
			res.render("login", {
				title: "Log In!",
				msg: "Welcome!",
				examples: dbExamples
			});
		});
	});

	app.get("/createaccount", function(req, res) {
		db.Example.findAll({}).then(function(dbExamples) {
			res.render("createaccount", {
				title: "Create an Account!",
				msg: "Welcome!",
				examples: dbExamples
			});
		});
	});


	// Render 404 page for any unmatched routes
	app.get("*", function(req, res) {
		res.render("404", {
			title: "Page Not Found"
		});
	});
>>>>>>> Stashed changes
	// Load index page
	app.get("/", function(req, res) {
		db.brewery_table.findAll({}).then(function() {
			res.render("index");
		});
	});

	// testing a login page
	app.get("/login", function(req, res) {
		// If the user already has an account send them to the members page
		if (req.user) {
			res.redirect("/members");
		}
		res.render("example");
	});

	// Load example page and pass in an example by id
	// homepage for a specific
	app.get("/example/:id", function(req, res) {
		db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
			res.render("example", {
				example: dbExample
			});
		});
	});

	// Render 404 page for any unmatched routes
	app.get("*", function(req, res) {
		res.render("404");
	});
};
