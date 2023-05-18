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

// Function - hide difficulty
function hideDifficulty() {
    document.getElementById("difficulty").classList.add("hide");
    document.getElementById("quiz-area").classList.remove("hide");
  }

  // Shuffled array concept taken directly from --> "https://www.youtube.com/watch?v=tLxBwSL3lPQ&ab_channel=AdamKhoury"
function arrayShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let s = Math.floor(Math.random() * (i + 1));
      [array[i], array[s]] = [array[s], array[i]];
    }
  }
  
  // Due to the nature of the API database, certain characters have to be replaced to prevent a bug from occuring --> "https://pkg.go.dev/github.com/eswdd/bosun/opentsdb"
const characterSimplify = (str) => {
    return str.replace(/&#(\d+);/g, function (match, dec) {
      return String.fromCharCode(dec);
    });
  };
  