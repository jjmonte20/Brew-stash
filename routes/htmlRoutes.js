var db = require("../models");
var path = require("path");


module.exports = function(app) {
  // Load index page
<<<<<<< HEAD
	app.get("/", function(req, res) {
		db.brewery_table.findAll({}).then(function(dbBrewTable) {
			res.json(dbBrewTable);
		});
	});

=======
  app.get("/", function(req, res) {
    db.brewery_table.findAll({}).then(function() {
      res.render("index");
    });
  });
>>>>>>> master
  // Load example page and pass in an example by id
	app.get("/example", function(req, res) {
		res.render('index', {layout: false});
		
	});
  


  // Render 404 page for any unmatched routes
	app.get("*", function(req, res) {
		res.render("404");
	});
};
