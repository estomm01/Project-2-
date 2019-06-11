var db = require("../models");

// This data source holds an array of information on pet compatibility data.
// var animal = require("../public/js/PetData.js");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (petHappydb) {
      res.json(petHappydb);
    });
  });

  //db.query(
  //     "INSERT INTO users (user_name, phone_number, zip_code, email, password) VALUES (?, ?, ?, ?, ?)",
  //     [userName, phoneNumber, zipCode, email, password],
  //     function(error, results, fields) {
  //       if (error) {
  //         throw error;
  //       }http://api.petfinder.com/pet.find?format=json&key=2f95f51b181ddd27883e91878e922466&location=07728&animal=dog&
  //       res.render("signup", {
  //         msg: "Signup complete!, click on signin."
  //       });
  //     }
  //   );

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (petHappydb) {
      res.json(petHappydb);
    });
  });

  // app.post("/api/users", function(req, res) {
  //   var userName = req.body.username;
  //   var phoneNumber = req.body.number;
  //   var zipCode = req.body.zipCode;
  //   var email = req.body.email;
  //   var password = req.body.password;
  //   console.log(userName);
  //   console.log(phoneNumber);
  //   console.log(zipCode);
  //   console.log(email);
  //   console.log(password);
  //   db.petHappydb.create(req.body).then(function(petHappydb) {
  //     res.json(petHappydb);
  //   });
  // .create({
  //   username: userName,
  //   phoneNumber: phoneNumber,
  //   zipCode: zipCode,
  //   email: email,
  //   password: password
  // })
  // .then(function(petHappydb) {
  //   res.json(petHappydb);
  // });
  //});
  /* eslint-disable */
  app.post("/api/new", function (req, res) {
    //console.log(req.body);
    var userInput = JSON.parse(JSON.stringify(req.body, null, 2))['userQuizValues[]'];
    //console.log(userInput);
    var userResults = [];
    userInput.forEach(element => {
      userResults.push(Number(element));
    });

    var userTotal = userResults.reduce((a, b) => a + b);
    console.log(userTotal);

    res.json({
      fakeValue:'Just some fake values'
    })

  });
  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (
      petHappydb
    ) {
      res.json(petHappydb);
    });
  });
};
