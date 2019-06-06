var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Pet.findAll({}).then(function(petHappydb) {
      res.render("index", {
        msg: "Welcome!",
        examples: petHappydb
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(petHappydb) {
      res.render("example", {
        example: petHappydb
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

//app.post("api/matches, function(req, res) {

//}
