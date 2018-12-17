// require models
var db = require("../models");

// also need express
var express = require("express");

// need to route
var router = express.Router();

    router.get("/api/users", function(req, res) {
        // in this case we will include breweries
        db.User.findAll({
            include: [db.Brewery]
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    router.get("/api/users/:id", function(req, res) {
        // in this case one user
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });
// ==================== always on the bottom
module.exports = router;