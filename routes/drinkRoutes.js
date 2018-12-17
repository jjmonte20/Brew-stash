// requiring our models
var db = require("../models");

// also need express
var express = require("express");

// need to route
var router = express.Router();

// POST route for drinks
router.post("/api/drinks", function(req, res) {
    db.Drinks.create(req.body).then(function(dbPost) {
        res.json(dbPost);
    })
});

// GET route for all drinks
router.get("/api/drinks", function(req, res) {
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
router.get("/api/drinks/:id", function(req, res) {
    // here find one drink
    db.Drinks.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Brewery]
    }).then(function(dbDrinks) {
        res.json(dbDrinks);
    });
});

// DELETE route for deleting drinks
router.delete("/api/drinks/:id", function(req, res) {
    db.Drinks.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(dbDrinks){
        res.json(dbDrinks);
    });
});

// PUT route for updating drinks
router.put("/api/drinks", function(req, res) {
    db.Drinks.update(
        req.body,
        {
            where: {
                id: req.body.id
            }
        }).then(function(dbDrinks) {
        res.json(dbDrinks);
    });
});
// =================================================
module.exports = router;