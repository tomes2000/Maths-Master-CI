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

// Quiz area
const question = document.getElementById("question");
const answerButtons = document.getElementsByClassName("answer-text");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");


// Feature to move onto next question
let correctAnswer;
const next = document.getElementById("next");
let answerSelected;

// Score submit area
const finalScore = document.getElementById("final-score");
const yourName = document.getElementById("yourName");
const submitScoreBtn = document.getElementById("submitscorebtn");
const MaxHighScores = 10;