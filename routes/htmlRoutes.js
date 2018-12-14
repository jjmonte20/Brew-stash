var db = require("../models");

module.exports = function(app) {
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
