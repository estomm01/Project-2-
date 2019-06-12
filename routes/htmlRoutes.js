var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(
  //     petHappydb
  //   ) {
  //     res.render("example", {
  //       example: petHappydb
  //     });
  //   });
  // });

  //app.post("/signup", [

  //] function(req, res, next) {
    // req.checkBody('user_name', 'Username field cannot be empty.').notEmpty();
    // req.checkBody('user_name', 'Username must be between 4-15 characters long.').len(4, 15);
    // req.checkBody('email', 'The email you entered is invalid, please try again.').isEmail();
    // req.checkBody('email', 'Email address must be between 4-100 characters long, please try again.').len(4, 100);
    // req.checkBody('exampleInputPassword1', 'Password must be between 8-100 characters long.').len(8, 100);
    // req.checkBody("exampleInputPassword1", "Password must include one lowercase character, one uppercase character, a number, and a special character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i");
    // req.checkBody('exampleInputPassword2', 'Password must be between 8-100 characters long.').len(8, 100);
    // req.checkBody('exampleInputPassword2', 'Passwords do not match, please try again.').equals(req.body.password);

    // var errors = req.validationErrors();
    // console.log(errors);
    // if (errors) {
    //   //console.log(`errors: $(JSON.stringify(errors)}`);
    //   res.render("signup", {
    //     msg: "Registration error",
    //     errors: errors
    //   });
      // res.render("signup", {
      //   msg: "Welcome!",
      //   examples: petHappydb
      // });
    //}
  //});

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

  app.get("/quiz", function(req, res) {
    res.render("quiz");
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(petHappydb) {
      res.render("example", {
        example: dbExample
      });
    });
  });


  //HTML route for quiz page.

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  })
};
