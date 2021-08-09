//get initials
function getInitials() {
    //prevent the browswer from refreshing to show quiz intro
    event.preventDefault();
    //get mostRecentScore/ time
    let initials = formInputEl.value;
    if (!initials) {
        alert("You need to enter your initials to log your high score!");
        return;
    }
    let highScoreObj = 
    {
        initials: initials,
        score: time
    };
   saveScore(highScoreObj);
}
function saveScore() {
const highScoreArr = [];
highScoreArr.push(highScoreObj);
localStorage.setItem("highScoreArr", JSON.stringify(highScoreArr));
const savedHighScoreString = localStorage.getItem("highScoreArr");
const savedHighScoreArr = JSON.parse(savedHighScoreString);
for (let i = 0; i < savedHighScoreArr.length; i++) {
    let savedInitials = savedHighScoreArr[i].initials;
    let savedScore = savedHighScoreArr[i].score;
    console.log(savedInitials);
    console.log(savedScore);
    let leaderBoardListItemEl = document.createElement("li");
    leaderBoardOLEl.appendChild(leaderBoardListItemEl);
    leaderBoardListItemEl.innerHTML = savedInitials + " - " + savedScore;
}
loadHighScores();
}

function loadHighScores() {
    document.querySelector(".quiz-intro").classList.add("hidden");
    questionContainerEl.classList.add("hidden");
    endOfQuizEl.classList.add("hidden");
    leaderBoardEl.classList.remove("hidden");
}
