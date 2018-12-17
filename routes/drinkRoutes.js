// requiring our models
var db = require("../models");

// POST route for saving a new drink
module.exports = function(app) {
    // POST route for drinks
    app.post("/api/drinks", function(req, res) {
        db.Drinks.create(req.body).then(function(dbPost) {
            res.json(dbPost);
        })
    });

    // GET route for all drinks
    app.get("/api/drinks", function(req, res) {
        var query = {};
        if (req.query.brewery_id){
            query.BreweryId = req.query.brewery_id;
        }
        // the find all for drinks
        db.Drinks.findAll({
            where: query,
            include: [db.Brewery]
        }).then(function(dbDrinks) {
            res.json(dbDrinks);
        });
    });

    // get route for retrieving a single drink
    app.get("/api/drinks/:id", function(req, res) {
        // here find one drink
        db.Drinks.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Brewery]
        }).then(function(dbDrink) {
            res.json(dbDrink);
        });
    });
// =================================================
}