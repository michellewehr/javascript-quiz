// set time to 100 to begin quiz with 100 (subtract 10 for each wrong answer)
let time = 100;
// show time on page
let timeEl = document.querySelector(".time-value");
timeEl.innerHTML = time;
//set current question to index 0 of questions array
let currentQuestion = 0;
// get start button
var startBtnEl = document.querySelector(".start-quiz");
// get quetion container to append children to
var questionContainerEl = document.querySelector(".question-container");
//question div
var questionDivEl = document.createElement("div");
questionDivEl.className = "question";
//append question div El to question-container
questionContainerEl.appendChild(questionDivEl);
//question text
var questionTextEl = document.createElement("h3");
questionTextEl.className = "question-text";
// answer-options
var answerAEl = document.createElement("button");
answerAEl.className = "answer-option";
answerAEl.id = "answerA";
answerAEl.type = "submit";
var answerBEl = document.createElement("button");
answerBEl.className = "answer-option";
answerBEl.id = "answerB";
answerBEl.type = "submit";
var answerCEl = document.createElement("button");
answerCEl.className = "answer-option";
answerCEl.id = "answerC";
answerCEl.type = "submit";
var answerDEl = document.createElement("button");
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
var endOfQuizEl = document.querySelector(".end-quiz");
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
// //create array to hold high scores
// let highScoreArr = [];


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
console.log(questions.length);
//when press start button- start quiz function (remove quiz intro section and show quiz)
function startQuiz() {
    document.querySelector(".quiz-intro").classList.add("hidden");
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
// when select an answer, check the answer if it is correct keep time as is, if incorrect subtract 10
function checkAnswer() {
    console.log(currentQuestion);
    let currentQuestionData = questions[currentQuestion]
    let correctAnswerEl = questions[currentQuestion].correctAnswer;
    let target = event.target;
    if (target.textContent === correctAnswerEl) {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
        time = time - 10;
        timeEl.innerHTML = time;
    }
    // if no more questions in array or time is 0 then stop quiz, if not proceed
    if (currentQuestion < questions.length -1 && time > 0){
        showCurrentQuestion(currentQuestion++);
    } else { 
        questionContainerEl.classList.add("hidden");
        endOfQuizEl.classList.remove("hidden");
        }
        formPEl.textContent = "Your final score is: " + time;
}


//get initials
function saveScore() {
    let highScoreArr = localStorage.getItem("highScores") || [];
    highScoreArr = JSON.parse(highScoreArr);
    //prevent the browswer from refreshing to show quiz intro
    event.preventDefault();
    //high score object
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
    highScoreArr.push(highScoreObj);
    saveHighScore();
    var savedHighScoreArr = localStorage.getItem("highScores");
    if (!savedHighScoreArr) {
        return false;
    } else {
    // else, load up saved high scores & parse into array of objects
    savedHighScoreArr = JSON.parse(localStorage.getItem(savedHighScoreArr));
    console.log(savedHighScoreArr)
    
}
//save in local storage
function saveHighScore() {
    localStorage.setItem("highScores", JSON.stringify(highScoreArr));
}

function loadHighScores() {
  
    // loop through saved high score array and display on leaderboard
    for (let i = 0; i < savedHighScoreArr.length; i++) {
        let savedInitials = savedHighScoreArr[i].initials;
        let savedScore = savedHighScoreArr[i].score;
        console.log(savedInitials);
        console.log(savedScore);
        let leaderBoardListItemEl = document.createElement("li");
        leaderBoardOLEl.appendChild(leaderBoardListItemEl);
        leaderBoardListItemEl.innerHTML = savedInitials + " - " + savedScore;
    }
    }

    document.querySelector(".quiz-intro").classList.add("hidden");
    questionContainerEl.classList.add("hidden");
    endOfQuizEl.classList.add("hidden");
    leaderBoardEl.classList.remove("hidden");
}

function clearHighScores() {
    localStorage.clear();
}


// //leader board go back button 
// leaderBoardGoBackBtnEl.addEventListener("click", reload => reload = location.reload());
//lead board clear high scores button 
leaderBoardResetBtnEl.addEventListener("click", clearHighScores);
//when submit end of quiz form 
formBtnEl.addEventListener("click", saveScore);
//query selector all for question-answer-options to run function checkAnswer()
var answerOptionEl = document.querySelectorAll(".answer-option");
for(let option of answerOptionEl) {
    option.addEventListener("click", checkAnswer);
}
//when press button
startBtnEl.addEventListener("click", startQuiz);