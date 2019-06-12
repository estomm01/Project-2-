var db = require("../models");
// This data source holds an array of information on pet compatibility data.
// var animal = require("../public/js/PetData.js");
const { check, validationResult } = require('express-validator/check');

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

  app.post("/api/users", [
   //  check('user_name', 'Username field cannot be empty.').isLength(4),
    check('user_name', 'Username must be between 4-15 characters long.').isLength(4, 15),
    check('email', 'The email you entered is invalid, please try again.').isEmail(),
    check('email', 'Email address must be between 4-100 characters long, please trisN again.').isLength(4, 100),
    check('pswd', 'Password must be between 8-100 characters long.').isLength(8, 100),
    check("pswd", "Password must include one lowercase character, one uppercase character, a number, and a special character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i"),
    check('pswd', 'Password must be between 8-100 characters long.').isLength(8, 100),
    check('pswd2', 'Passwords do not match, please try again.').equals('pswd')
  ], function(req, res) {
    console.log("req._validationErrors");
    console.log(req._validationErrors);
    console.log("req.body");
    console.log(req.body);
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(422).json({ errors: errors.array() });
    // }
    let newUser = {
      user_name: req.body.user_name,
      phone_number: req.body.phone_number,
      zip_code: req.body.zip_code,
      email: req.body.email,
      pswd: req.body.pswd
    };
    db.User.create(newUser).then(function(dbUser) {
      res.json(dbUser);
    });
  });

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
    // db.petHappydb.create(req.body).then(function(petHappydb) {
    //   res.json(petHappydb);
    // }).then(function(petHappydb) {
    //   res.json(petHappydb);
    // });
    // .create({
    //   username: userName,
    //   phoneNumber: phoneNumber,
    //   zipCode: zipCode,
    //   email: email,
    //   password: password
    // })
  //});

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
