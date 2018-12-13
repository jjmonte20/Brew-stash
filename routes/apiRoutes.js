var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/user", function(req, res) {
    db.Example.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new example
  app.post("/api/user", function(req, res) {
    db.Example.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};
