// Create starting data list and quesitonNumberReference
var data = {};
let questionNumberReference = 0;

// Databse API
const easyQuiz = "https://opentdb.com/api.php?amount=20&category=17&difficulty=easy&type=multiple";
const mediumQuiz = "https://opentdb.com/api.php?amount=20&category=17&difficulty=medium&type=multiple";
const hardQuiz = "https://opentdb.com/api.php?amount=20&category=17&difficulty=hard&type=multiple";

// Difficulty selection
const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
let apiAddress;

// Score and quesiton number display
let questionCounter = 1;
let questionNumber = document.getElementById("answer-number");
let score = 0;
let acceptingAnswers = true;
let scoreCounter = document.getElementById("score");
