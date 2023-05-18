// Top 10 highest scores
const highScoresList = document.getElementById("highscoreslist");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Add to the high score list
highScoresList.innerHTML = highScores.map(highScores => {
    return `<li class="highscoreitem">${highScores.name} - ${highScores.score}</li>`;
  }).join("");