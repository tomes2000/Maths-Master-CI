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
}
  
// API function taken from --> "https://www.youtube.com/watch?v=1Okmw8ggD1Q&ab_channel=dcode"
async function callApi() {
    const response = await fetch(apiAddress);
    if (response.status >= 200) {
      data = await response.json();
      // Hide the difficult box
      hideDifficulty();
      // Start the game based on the difficult selected
      getQuestion(data);
    } else
      // If response condition is not met, redirect here
      window.location.assign("500.html");
}

// Increase score function
function increaseScore() {
  score += 10;
  scoreCounter.innerText = `${score}`;
}


// Run next question
function nextQuestion(event) {
  // Increase quesiton counter
  questionCounter++;
  questionNumber.innerText = `${questionCounter}`;
  document.getElementById(answerSelected).classList.remove("correctbtn", "incorrectbtn");
  // Allows next quesiton to become interactable 
  let displayCorrectAnswer = document.querySelector("[data-correct='true']");
  displayCorrectAnswer.classList.remove("correctbtn");
// Loop through to verify correct answer to add data attribute 
for (let button of answerButtons) {
  if (button.innerHTML === correctAnswer) {
    button.removeAttribute("data-correct", "true");
  }
}
getQuestion(data);
}

// Answer verification function
function checkAnswer(event) {
  // Disable answer buttons when an answer is selected and retain its id
  $('.answer-text').prop('disabled', true);
  answerSelected = event.target.getAttribute("id");

  // Verify answer from the database
  if (event.target.dataset.correct) {
    // CSS styling
    document.getElementById("outer-container").classList.add("correct");
    document.getElementById(answerSelected).classList.add("correctbtn");
    // Run function to increase score
    increaseScore();

  } else {
    // CSS styling
    document.getElementById(answerSelected).classList.add("incorrectbtn");
    document.getElementById("outer-container").classList.add("incorrect");
    let displayCorrectAnswer = document.querySelector("[data-correct='true']");
    displayCorrectAnswer.classList.add("correctbtn");
  }
  // Displays the next question button for user to interact with
  next.classList.remove("hide");
  next.addEventListener("click", nextQuestion);
}

// Get question function
function getQuestion(data) {
  next.classList.add("hide");
  document.getElementById("outer-container").classList.remove("correct", "incorrect");

  //Allows the answer buttons to be clicked
  $('.answer-text').prop('disabled', false);
  let results = data.results[questionNumberReference];
  // Restricts quiz to 10 questions
  if (questionNumberReference <= 9) {
    // Implement quesiton from DB into site
    question.innerHTML = results.question;
    correctAnswer = results.correct_answer;
    // Create an array that holds all the answer choices for the question
    const answers = [...results.incorrect_answers, correctAnswer];
    // Shuffle through the answers for the question
    arrayShuffle(answers);
    answer1.innerHTML = `${answers[0]}`;
    answer2.innerHTML = `${answers[1]}`;
    answer3.innerHTML = `${answers[2]}`;
    answer4.innerHTML = `${answers[3]}`;

    // Add data-correct attribute if answer is true by looping through and verifying
    for (let button of answerButtons) {
      if (button.innerHTML === characterSimplify(correctAnswer)) {
        button.setAttribute("data-correct", "true");
      }
      // adds event listener to each button & on click runs check answer function
      button.addEventListener("click", checkAnswer);
    }
    // Increase question number
    questionNumberReference++;
  } else {
    // Takes user to the end screen where the final score is displayed
    document.getElementById("quiz-area").classList.add("hide");
    document.getElementById("end-area").classList.remove("hide");
    finalScore.innerText = `${score}`;
  }
}

// High score save function taken from --> "https://www.youtube.com/watch?v=DFhmNLKwwGw&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=9"
function saveHighScore(event) {
  event.preventDefault();
  const scoreLog = {
    name: yourName.value,
    score: score
  };

  // High score is pushed in, sorted by number with a maximum of 10 scores available
  highScores.push(scoreLog);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(MaxHighScores);
  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("highscores.html");
}

// High score local storage function taken from --> "https://www.youtube.com/watch?v=jK5zzSA2JHI&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=11&ab_channel=JamesQQuick"
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Prevents user inputting a variable when the field is empty
yourName.addEventListener("keyup", () => {
  submitScoreBtn.disabled = !yourName.value;
});

submitScoreBtn.addEventListener("click", saveHighScore);

// Event listener checks the difficulty answer function
easy.addEventListener('click', callApi);
medium.addEventListener('click', callApi);
hard.addEventListener('click', callApi);