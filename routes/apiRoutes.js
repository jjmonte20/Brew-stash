var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

	// Get all examples
	// app.get("/api/user", function(req, res) {
	//   db.Example.findAll({}).then(function(dbUser) {
	//     res.json(dbUser);
	//   });
	// });

	// Get all of the breweries for one id
	// app.get("/api/breweries", function(req, res) {
	// 	var query = {};
	// 	if (req.query.)
	// });


	// Get all of the drinks
	// app.get("/api/drinks", function(req, res) {
	
	// });
  
	// ------------------------------------------------------- 
	// POSTS to do account info
	app.post("/api/signup", function(req, res) {
		console.log(req.body);
		db.User.create({
			username: req.body.username,
			password: req.body.password,
		}).then(function() {
			// if the user is not unique, would like to reload the page or show on the alert screen that the username is already takens
			// redirect should then take the user to the login page
			res.redirect(307, "/api/login");
		}).catch(function(err) {
			console.log(err);
			res.json(err);
		});
	});

	app.post("/api/login", passport.authenticate("local"), function(req, res){
		// if the user is able to log in, send them to the breweries page
		res.json("/breweries");
	});

	//=================================================================
		// making a signup brewmaster page in case it is needed
	// app.post("/api/signupBrewMaster", function(req, res) {
	// 	console.log(req.body);
	// 	db.BrewMaster.create({
	// 		username: req.body.username,
	// 		password: req.body.password,
	// 	}).then(function(result) {
	// 		console.log(result);
	// 		// if the user is not unique, would like to reload the page or show on the alert screen that the username is already takens
	// 		// redirect should then take the user to the login page
	// 		return res.redirect(307, "/api/login");
	// 	}).catch(function(err) {
	// 		console.log(err);
	// 		res.json(err);
	// 	});
	// });
	//===================================================================
	// User adding a rating
	// app.post("/api/breweries/drink/rating", function(req, res) {
	// 	// will need to see body for adding a brewery
	// 	db.Example.create(req.body).then(function(dbExample) {
	// 		// will be a post for if the user has the correct account info
	// 		res.json(dbExample);
	// 	});
	// });

	// -------------------------------------------------------
	// POSTS to add breweries and drinks

	// Create a new example

	// app.post("/api/breweries", function(req, res) {
	// 	// will need to see body for adding a brewery
	// 	db.brewery_table.create(req.body).then(function(dbbrewery_table) {
	// 		res.json(dbbrewery_table);
	// 	})
	// });

	// app.post("/api/breweries/drink", function(req, res) {
	// 	// let's see what the body looks like
	// 	console.log(req.body);
	// 	// if the body looks good make a call to add
	// 	db.Drinks.create({
	// 		// double check these if they don't add in postman
	// 		breweryId: req.body.id,
	// 		type: req.body.type,
	// 		price: req.body.price
	// 	}).then(function(result) {
	// 		// let's see the result first
	// 		console.log(result);
	// 	}).catch(function(err) {
	// 		console.log(err);
	// 		res.json(err);
	// 	});
	// });

	// -------------------------------------------------------------
	// DELETES

	// deleting a brewery
	// app.delete("/api/breweries/:id", function(req, res) {
	// 	db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
	// 		res.json(dbExample);
	// 	});
	// });

	// // deleting a drink
	// app.delete("/api/breweries/drink/:id", function(req, res) {
		
	// });
};
