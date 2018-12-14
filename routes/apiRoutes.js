var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

	// Get all examples
	// app.get("/api/user", function(req, res) {
	//   db.Example.findAll({}).then(function(dbUser) {
	//     res.json(dbUser);
	//   });
	// });

	// Get all of the breweries
	app.get("/api/breweries", function(req, res) {
		db.Example.findAll({}).then(function(dbExamples) {
			res.json(dbExamples);
		});
	});


	// Get all of the drinks
	app.get("/api/drinks", function(req, res) {
		db.Example.findAll({}).then(function(dbExamples) {
			res.json(dbExamples);
		});
	});
  
	// ------------------------------------------------------- 
	// POSTS to do account info
	app.post("/api/signup", function(req, res) {
		console.log(req.body);
		db.User.create({
			username: req.body.username,
			password: req.body.password,
			admin: req.body.admin
		}).then(function(result) {
			console.log(result);
			// if the user is not unique, would like to reload the page or show on the alert screen that the username is already takens
			res.redirect(307, "/api/login");
		}).catch(function(err) {
			console.log(err);
			res.json(err);
		});
	});

	app.post("/api/login", passport.authenticate("local"), function(req, res){
		res.json("/members");
	});


	// User adding a rating
	app.post("/api/breweries/drink/rating", function(req, res) {
		// will need to see body for adding a brewery
		db.Example.create(req.body).then(function(dbExample) {
			// will be a post for if the user has the correct account info
			res.json(dbExample);
		});
	});

	// -------------------------------------------------------
	// POSTS to add breweries and drinks

	// Create a new example

	app.post("/api/breweries", function(req, res) {
		// will need to see body for adding a brewery
		db.Example.create(req.body).then(function(dbExample) {
			res.json(dbExample);
		});
	});

	app.post("/api/breweries/drink", function(req, res) {
		// will need to see body for adding a drink
		db.Example.create(req.body).then(function(dbExample) {
			res.json(dbExample);
		});
	});

	// -------------------------------------------------------------
	// DELETES

	// deleting a brewery
	app.delete("/api/breweries/:id", function(req, res) {
		db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
			res.json(dbExample);
		});
	});

	// deleting a drink
	app.delete("/api/breweries/drink/:id", function(req, res) {
		db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
			res.json(dbExample);
		});
	});
};
