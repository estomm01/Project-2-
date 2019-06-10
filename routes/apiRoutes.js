var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(petHappydb) {
      res.json(petHappydb);
    });
  });

 //db.query(
  //     "INSERT INTO users (user_name, phone_number, zip_code, email, password) VALUES (?, ?, ?, ?, ?)",
  //     [userName, phoneNumber, zipCode, email, password],
  //     function(error, results, fields) {
  //       if (error) {
  //         throw error;
  //       }
  //       res.render("signup", {
  //         msg: "Signup complete!, click on signin."
  //       });
  //     }
  //   );

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(petHappydb) {
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

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      petHappydb
    ) {
      res.json(petHappydb);
    });
  });
};
