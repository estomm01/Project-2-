var db = require("../models");

// This data source holds an array of information on pet compatibility data.
// var animal = require("../public/js/PetData.js");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(petHappydb) {
      res.json(petHappydb);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(petHappydb) {
      res.json(petHappydb);
    });
  });

  app.post("/api/new", function(req, res) {
    console.log(req.body);
    var userInput = JSON.parse(JSON.stringify(req.body,null,2))['scoresArray[]'];
    var userResults = [];
    userInput.forEach(element => {
    userResults.push(Number(element));
    });

    var userTotal = userResults.reduce((a,b)=>a+b);
    console.log(userTotal);
    // console.log(userInput);
    // db.Example.create(req.body).then(function(petHappydb) {
    //   res.json(petHappydb);
    // });
  });
  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      petHappydb
    ) {
      res.json(petHappydb);
    });
  });
};
