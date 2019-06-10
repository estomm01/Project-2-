var db = require("../models");
var config = require("../config/config.json");

module.exports = function (app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (petHappydb) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/signin", function(req, res) {
    res.render("signin");
  });

  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  app.get("/forgot", function(req, res) {
    res.render("forgot");
  });

  app.get("/survey", function(req, res) {
    res.render("survey");
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  app.get("/quiz", function(req, res) {
    res.render("quiz");
  });
  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (petHappydb) {
      res.render("example", {
        example: dbExample
      });
    });
  });
  //HTML route for quiz page.

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
