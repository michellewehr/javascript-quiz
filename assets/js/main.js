//view high scores anchor element on document
let viewHighScoresEl = document.querySelector(".view-high-scores");
//set current question to index 0 of questions array
let currentQuestion = 0;
// get start button
const startBtnEl = document.querySelector(".start-quiz");
// get quetion container to append children to
const questionContainerEl = document.querySelector(".question-container");
//question div
const questionDivEl = document.createElement("div");
questionDivEl.className = "question";
//append question div El to question-container
questionContainerEl.appendChild(questionDivEl);
//question text
const questionTextEl = document.createElement("h3");
questionTextEl.className = "question-text";
// answer-options
const answerAEl = document.createElement("button");
answerAEl.className = "answer-option";
answerAEl.id = "answerA";
answerAEl.type = "submit";
const answerBEl = document.createElement("button");
answerBEl.className = "answer-option";
answerBEl.id = "answerB";
answerBEl.type = "submit";
const answerCEl = document.createElement("button");
answerCEl.className = "answer-option";
answerCEl.id = "answerC";
answerCEl.type = "submit";
const answerDEl = document.createElement("button");
answerDEl.className = "answer-option";
answerDEl.id = "answerD";
answerDEl.type = "submit";
//append questiontext to question div
questionDivEl.appendChild(questionTextEl);
//append answers to question div
questionDivEl.appendChild(answerAEl);
questionDivEl.appendChild(answerBEl);
questionDivEl.appendChild(answerCEl);
questionDivEl.appendChild(answerDEl);
//create end of quiz form
const endOfQuizEl = document.querySelector(".end-quiz");
//create text content for end of quiz form
const formHeadingEl = document.createElement("h3");
formHeadingEl.textContent = "All done!";
const formPEl = document.createElement("p");
const formLabelEl =document.createElement("label");
formLabelEl.for = "initial-input";
formLabelEl.textContent = "Enter Initials: "
const formInputEl = document.createElement("input");
formInputEl.id = "initial-input"
formInputEl.className = "initial-input";
const formBtnEl = document.createElement("button");
formBtnEl.className = "initial-btn";
formBtnEl.type = "submit";
formBtnEl.textContent = "Submit";
endOfQuizEl.appendChild(formHeadingEl);
endOfQuizEl.appendChild(formPEl);
endOfQuizEl.appendChild(formLabelEl);
endOfQuizEl.appendChild(formInputEl);
endOfQuizEl.appendChild(formBtnEl);
//create leaderboard
const leaderBoardEl = document.querySelector(".leaderboard");
//create elements for leaderboard
const leaderBoardHeaderEl = document.createElement("h3");
leaderBoardHeaderEl.textContent = "High Scores";
const leaderBoardOLEl = document.createElement("ol");
const leaderBoardGoBackBtnEl = document.createElement("button");
leaderBoardGoBackBtnEl.className = "go-back";
leaderBoardGoBackBtnEl.textContent = "Go Back";
const leaderBoardResetBtnEl = document.createElement("button");
leaderBoardResetBtnEl.className = "clear";
leaderBoardResetBtnEl.type = "reset";
leaderBoardResetBtnEl.textContent = "Clear high scores";
leaderBoardEl.appendChild(leaderBoardHeaderEl);
leaderBoardEl.appendChild(leaderBoardOLEl);
leaderBoardEl.appendChild(leaderBoardGoBackBtnEl);
leaderBoardEl.appendChild(leaderBoardResetBtnEl);
//create array to hold high scores
let highScoreArr = [];
// create var interval variable to add the set/clear Interval methods
var interval;

// Questions Array
const questions = [
   {
        question: "What is your name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Michelle"
    },
   {
        question: "What is your age?",
        answerA: "28",
        answerB: "4",
        answerC: "5",
        answerD: "6",
        correctAnswer: "28"
    },
    {
        question: "What is your gender?",
        answerA: "male",
        answerB: "non-binary",
        answerC: "female",
        answerD: "goat",
        correctAnswer: "female"
    },
   {
        question: "hi?",
        answerA: "hello",
        answerB: "bye",
        answerC: "tush",
        answerD: "butt",
        correctAnswer: "hello"
    },
    {
        question: "What is your name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Michelle"
    },
   {
        question: "What is your middle name?",
        answerA: "Michelle",
        answerB: "Napolitano",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Napolitano"
    },
    {
        question: "What is your fish?",
        answerA: "fish",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "fish"
    },
    {
        question: "What is Lanas name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Lana"
    },
    {
        question: "What is Milas name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Mila"
    },
    {
        question: "What is Avas name?",
        answerA: "Michelle",
        answerB: "Lana",
        answerC: "Mila",
        answerD: "Ava",
        correctAnswer: "Ava"
    }
]
// set time to 5 minutes or 300 seconds to begin quiz with
let time = 20;
//show time on intro page 
let timeEl = document.querySelector(".time-value");
timeEl.innerHTML = time;

//count down function
function countDownTimer() {
    //show time on page
    timeEl.innerHTML = time;
    time--; 
    // when time hits 0, clear interval 
    if (time === 0) {
        clearInterval(interval);
        questionContainerEl.classList.add("hidden");
        endOfQuizEl.classList.remove("hidden");
        formPEl.textContent = "Your final score is: " + time;
    }
}


//when press start button- start quiz function (remove quiz intro section and show quiz)
function startQuiz() {
    // set interval for countdown in start quiz function so it doesn't run until button clicked
    interval = setInterval(countDownTimer, 1000);
    // remove intro page 
    document.querySelector(".quiz-intro").classList.add("hidden");
    // show questions 
    showCurrentQuestion();
}

//show questions function
function showCurrentQuestion() {
    questionContainerEl.classList.remove("hidden");
    questionTextEl.textContent = questions[currentQuestion].question;
    answerAEl.textContent = questions[currentQuestion].answerA;
    answerBEl.textContent = questions[currentQuestion].answerB;
    answerCEl.textContent = questions[currentQuestion].answerC;
    answerDEl.textContent = questions[currentQuestion].answerD;
}
// when select an answer, check the answer if it is correct, if incorrect subtract 10seconds from timer
function checkAnswer() {
    console.log(currentQuestion);
    let currentQuestionData = questions[currentQuestion]
    let correctAnswerEl = questions[currentQuestion].correctAnswer;
    // get click target to see which button was clicked to check if correct
    let target = event.target;
    if (target.textContent === correctAnswerEl) {
        //TODO: show correct with hr under for a timed amount
        console.log("Correct!");
    } else {
        //TODO: show wrong with hr under for a timed amount
        time = time - 10;
        timeEl.textContent = time;
    }
    // if no more questions in array or time is 0 then stop quiz, if not proceed
    if (currentQuestion < questions.length -1 && time > 0){
        showCurrentQuestion(currentQuestion++);
    } else {
        questionContainerEl.classList.add("hidden");
        endOfQuizEl.classList.remove("hidden");
        formPEl.textContent = "Your final score is: " + time;
        clearInterval(interval);
        }
}



//get initials, save initials with associated time in highScore array
function getInitials() {
    //prevent the browswer from refreshing to show quiz intro
    event.preventDefault();
    //get initials
    let initials = formInputEl.value;
    if (!initials) {
        alert("You need to enter your initials to log your high score!");
        return;
    }
    //high score object
    let highScoreObj = 
    {
        initials: initials,
        score: time
    };
    // get highScoreArray from localStorage to stop overwriting each refresh
    highScoreArr = localStorage.getItem("highScores");
    // if nothing in highScoreArr/ 1st go-around, initialize empty array and  push object; if not-- turn the localStorage item back into array and push item, run saveHighScore function to save it so next go-around it is there
    if (!highScoreArr) {
        highScoreArr = [];
        highScoreArr.push(highScoreObj);
        saveHighScore();
    } else {
        highScoreArr = JSON.parse(highScoreArr);
        highScoreArr.push(highScoreObj);
        saveHighScore();
    }
    loadHighScores();
}

//save in local storage
function saveHighScore() {
    localStorage.setItem("highScores", JSON.stringify(highScoreArr));
}

//show high scores
function loadHighScores() {
    clearInterval(interval);
    //get saved highscores
    var highScores = localStorage.getItem("highScores");
    // turn highscores into an array
    highScores = JSON.parse(highScores);
    highScores = highScores
        .sort((a, b) => a.score - b.score)
        .reverse()
    //if there are no high scores, return out of function
    if (!highScores) {
        return false;
    }
    //for each item in high scores array add as list element, show the list, hide the rest of the quiz elements
    for(let i = 0; i < highScores.length; i++) {
        let savedInitials = highScores[i].initials;
        let savedScore = highScores[i].score;
        let leaderBoardListItemEl = document.createElement("li");
        leaderBoardOLEl.appendChild(leaderBoardListItemEl);
        leaderBoardListItemEl.innerHTML = savedInitials + " - " + savedScore;
    }
    document.querySelector(".quiz-intro").classList.add("hidden");
    questionContainerEl.classList.add("hidden");
    endOfQuizEl.classList.add("hidden");
    leaderBoardEl.classList.remove("hidden");
    leaderBoardOLEl.classList.remove("hidden");
    // make sure can't click viewHighScoresEl twice
    viewHighScoresEl.style.pointerEvents = "none";
    }

// when clear high score button is pressed clear highscores
function clearHighScores() {
    localStorage.clear();
    leaderBoardOLEl.className = "hidden";
}


//view high scores link click
viewHighScoresEl.addEventListener("click", loadHighScores);
//leader board go back button 
leaderBoardGoBackBtnEl.addEventListener("click", reload => reload = location.reload());
// lead board clear high scores button 
leaderBoardResetBtnEl.addEventListener("click", clearHighScores);
//when submit end of quiz form 
formBtnEl.addEventListener("click", getInitials);
//query selector all for question-answer-options to run function checkAnswer()
var answerOptionEl = document.querySelectorAll(".answer-option");
for(let option of answerOptionEl) {
    option.addEventListener("click", checkAnswer);
}
//when press button
startBtnEl.addEventListener("click", startQuiz);