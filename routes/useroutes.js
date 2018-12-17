// require models
var db = require("../models");

module.exports = function(app) {
    app.get("/api/users", function(req, res) {
        // in this case we will include breweries
        db.User.findAll({
            include: [db.Brewery]
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    app.get("/api/users/:id", function(req, res) {
        // in this case one user
        db.User.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Brewery]
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });
// ==================== always on the bottom
}