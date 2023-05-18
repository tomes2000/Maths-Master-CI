// Top 10 highest scores
const highScoresList = document.getElementById("highscoreslist");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];