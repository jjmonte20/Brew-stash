// require models
var db = require("../models");

// is authenticated
var isAuthenticated = require("../config/middleware/isAuthenticated");


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

    router.get("/api/users/:id", isAuthenticated, function(req, res) {
        // in this case one user
        db.User.findOne({
            where: {
                id: req.user.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    router.get("/api/getData", isAuthenticated, function(req, res) {
        // console.log(req.user);
        res.json(req.user);
    });

// ==================== always on the bottom
module.exports = router;