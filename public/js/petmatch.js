etMatch / public / assets / src / petMatch / petMatch.js

var count = 0;

//Create variable to hold the user's choice/answer.

var userChoice;

//Create variable for choice button so that we can create it using jQuery.

var choiceBtn;

//Create variable for View Quiz Results button so that we can create it using jQuery.

var resultsBtn;

//Create an array that will hold all of the user's scores.

var scoresArray = [];

//Create variable to hold user quiz values.

var userQuizValues = [];

var findMatchPets;

//Construct query URL to get pet data from petfinder API to return matching pets.

// var queryURL = "https://api.petfinder.com/pet.find?";

//Create variable for LIKE button so that we can create it using jQuery.

var likeBtn;

//Create variable to hold all questions.

var questionSet = {

  questionArray: [{

    question: "I would prefer a pet that is good around other animals and other people.",

    choices: ["1 (STRONGLY DISAGREE)", "2", "3", "4", "5 (STRONGLY AGREE)"],

    values: ["1", "2", "3", "4", "5"]

  }, {

    question: "I would like to have a pet that would like exercising with me.",

    choices: ["1 (STRONGLY DISAGREE)", "2", "3", "4", "5 (STRONGLY AGREE)"],

    values: ["1", "2", "3", "4", "5"]

  }, {

    question: "I would like a pet that is loyal.",

    choices: ["1 (STRONGLY DISAGREE)", "2", "3", "4", "5 (STRONGLY AGREE)"],

    values: ["1", "2", "3", "4", "5"]

  }, {

    question: "I consider myself to be an affectionate.",

    choices: ["1 (STRONGLY DISAGREE)", "2", "3", "4", "5 (STRONGLY AGREE)"],

    values: ["1", "2", "3", "4", "5"]

  }, {

    question: "I prefer a pet that likes to stay inside.",

    choices: ["1 (STRONGLY DISAGREE)", "2", "3", "4", "5 (STRONGLY AGREE)"],

    values: ["1", "2", "3", "4", "5"]

  }, {

    question: "I would prefer a pet that likes being outdoors.",

    choices: ["YES", "NO"],

    values: ["1", "0"]

  }, {

    question: "What size pet are you looking for?",

    choices: ["SMALL", "MEDIUM", "LARGE"],

    values: ["0", "1", "2"]

  }, {

    question: "I don't mind a pet that is always willing to give me affection and is very energetic.",

    choices: ["1 (STRONGLY DISAGREE)", "2", "3", "4", "5 (STRONGLY AGREE)"],

    values: ["1", "2", "3", "4", "5"]

  }, {


    question: "What describes you best?",

    choices: ["Sensitive", "Tough"],

    values: ["1", "0"]

  }

  ]

};

//Hide question-div at start of quiz.

$("#question-div").hide();

//Hide progress bar at start of quiz.

$("#quiz-progress-bar").hide();

//When start quiz button is clicked, start quiz.

$("#start-quiz-btn").on("click", function () {

  start();

});

//Start quiz function

function start() {

// need to update the dom
findMatch() {

  $("#question-div").show().html("<h1>" + "Your results are ready!" + "</h1>");

  //Create a button to view the quiz results (resultsBtn).

  resultsBtn = $("<button>");

  resultsBtn.html("<h2>" + "View results" + "</h2>");

  resultsBtn.addClass("ui fluid blue button");

  resultsBtn.attr("id", "view-results-btn");

  //Append the resultsBtn so it shows up in the HTML.

  $("#view-quiz-results-div").append(resultsBtn);

  //When the user clicks the view results button, show match.

  $("#view-results-btn").on("click", function() {

  $("#match-results-modal").modal('show');

  $("#match-results-modal").modal({

  closable: true

  });

  console.log("button clicked");

  //When user submits scores...

  userQuizValues = [

  {

  question1: scoresArray[0],

  question2: scoresArray[1],

  question3: scoresArray[2],

  question4: scoresArray[3],

  question5: scoresArray[4],

  question6: scoresArray[5],

  question7: scoresArray[6],

  question8: scoresArray[7],

  question9: scoresArray[8],

  question10: scoresArray[9]

  }

  ]

  console.log(userQuizValues);

  //create some post and get functions
